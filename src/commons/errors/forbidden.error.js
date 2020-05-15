import { ResponseCode, ErrorMessage } from '../consts/response.consts';
import ResponseError from '../responses/error';

class ForbiddenError {
    constructor(errors) {
        const error = { error: ErrorMessage.FORBIDDEN, key: errors };
        return new ResponseError(ResponseCode.FORBIDDEN, error);
    }
}

export default ForbiddenError;
