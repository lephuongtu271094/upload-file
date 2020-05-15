import jwt from 'jsonwebtoken';
import config from 'config';

import BaseService from '../../commons/base/service.base';

class AuthenticateService extends BaseService {
    authenticateNormalUser(reqBody) {
        // ref: https://www.npmjs.com/package/jsonwebtoken
        return jwt.sign(reqBody, config.token.secret_key, {
            expiresIn: config.token.lifetimes
        });
    }
}

export default AuthenticateService;
