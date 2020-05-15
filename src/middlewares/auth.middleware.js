import config from 'config';

import UnauthorizedError from '../commons/errors/unauthorized.error';
import ForbiddenError from '../commons/errors/forbidden.error';
import GatewayTimeoutError from '../commons/errors/gateway_timeout.error';
import { AuthenticationConsts } from '../commons/consts/auth.middleware.consts';

import { MiddlewareErrorResponse } from './middlewares.error.response';

const userDAO = new UserDAO();

export const verifyAuth = async (req, res, next) => {
    const token = RequestUtils.getTokenFromRequest(req);

    if (!token) {
        throw new ForbiddenError(MiddlewareErrorResponse.no_token);
    }

    try {
        const decodedToken = RequestUtils.decodeToken(token, config.token.secret_key);
        const user = await userDAO.getRawRecordById(decodedToken.id);

        if (!user) {
            throw new UnauthorizedError(MiddlewareErrorResponse.auth_failed);
        }

        req.decodedToken = decodedToken;
        next();
    } catch (errors) {
        if (errors.name === AuthenticationConsts.TOKEN_EXPIRED_ERROR) {
            throw new GatewayTimeoutError(MiddlewareErrorResponse.session_time_out);
        }

        if (errors.name === AuthenticationConsts.JSON_WEB_TOKEN_ERROR) {
            throw new UnauthorizedError(MiddlewareErrorResponse.auth_failed);
        }
    }
};
