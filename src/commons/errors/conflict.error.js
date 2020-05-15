import { ResponseCode, ErrorMessage } from '../consts/response.consts';
import ResponseError from '../responses/error';

class ConflictError {
    constructor(errors) {
        const error = { error: ErrorMessage.CONFLICT, key: errors };
        return new ResponseError(ResponseCode.CONFLICT, error);
    }
}

export default ConflictError;
