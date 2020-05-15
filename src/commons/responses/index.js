import ResponseBase from '../base/response.base';
import { ResponseCode, ErrorMessage } from '../consts/response.consts';

class Response {
    success(res, data = []) {
        const responseMessage = ErrorMessage.OK;
        const response = new ResponseBase(ResponseCode.OK, responseMessage, data);
        return res.status(ResponseCode.OK).json(response);
    }

    noContent(res) {
        return res.status(ResponseCode.NO_CONTENT).send();
    }

    error(res, error) {
        console.error('response error: ', error);

        const apiErrorData = JSON.parse(JSON.stringify(error));
        const {
            code,
            statusCode,
            expose,
            errors
        } = apiErrorData;

        if (errors && errors.code && errors.code !== 400) {
            errors.code = `${errors.message}`;
            errors.message = errors.key;
            delete errors.key;
        }

        if (errors && errors.error && errors.key) {
            errors.code = errors.key;
            errors.message = errors.key.toUpperCase();
            delete errors.key;
        }

        return res.status(code || statusCode || ResponseCode.INTERNAL_SERVER_ERROR).json(expose ? error.message || ErrorMessage.UNKNOW_ERROR : errors);
    }
}

export default Response;
