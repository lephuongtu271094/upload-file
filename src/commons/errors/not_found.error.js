import { ResponseCode, ErrorMessage } from '../consts/response.consts';
import ResponseError from '../responses/error';

class NotFoundError {
    constructor(errors) {
        if (typeof errors === 'object') {
            errors.error = ErrorMessage.NOT_FOUND;
        }
        const notFound = {
            error: ErrorMessage.NOT_FOUND,
            key: errors
        };
        return new ResponseError(ResponseCode.NOT_FOUND, typeof errors !== 'object' ? notFound : errors);
    }
}

export default NotFoundError;
