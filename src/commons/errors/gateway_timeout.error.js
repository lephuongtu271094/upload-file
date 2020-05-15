import { ResponseCode, ErrorMessage } from '../consts/response.consts';
import ResponseError from '../responses/error';

class GatewayTimeoutError {
    constructor(errors) {
        const error = { error: ErrorMessage.GATEWAY_TIMEOUT, key: errors };
        return new ResponseError(ResponseCode.GATEWAY_TIMEOUT, error);
    }
}

export default GatewayTimeoutError;
