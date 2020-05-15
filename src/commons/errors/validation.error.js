import { ResponseCode, ErrorMessage } from '../consts/response.consts';
import ResponseError from '../responses/error';

class ValidationError {
    constructor(errors, errorLabel = '', errorMsg = '', errorCode = 400) {
        let error = {};
        if (errors) {
            const { details } = errors;
            const detailsError = details && details[0];
            error = {
                code: errors.code || errorCode,
                error: ErrorMessage.VALIDATION_FAILED,
                label: errors.label || detailsError.context.label,
                message: errors.message || detailsError.message
            };
        }

        if (!errors) {
            error = {
                code: errorCode,
                error: ErrorMessage.VALIDATION_FAILED,
                label: errorLabel,
                message: errorMsg
            };
        }

        return new ResponseError(ResponseCode.VALIDATION_FAILED, error);
    }
}

export default ValidationError;
