import { ResponseCode, ErrorMessage } from '../consts/response.consts';
import ResponseError from '../responses/error';

class UnauthorizedError {
    constructor(errors) {
        const error = { error: ErrorMessage.UNAUTHORIZED, key: errors };
        return new ResponseError(ResponseCode.UNAUTHORIZED, error);
    }
}

export default UnauthorizedError;
