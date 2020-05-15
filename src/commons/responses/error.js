import BaseResponse from '../base/response.base';

class ErrorResponse {
    constructor(code, errors) {
        return new BaseResponse(code, undefined, undefined, errors);
    }
}

export default ErrorResponse;
