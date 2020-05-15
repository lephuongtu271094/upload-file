export const ErrorCode = {
    INVALID_PARAM: 'Invalid parameter',
    CONFLICT: 'Conflict',
    RESOURCE_NOT_FOUND: 'Resource not found',
    UNAUTHORIZED: 'Unauthorized',
    FORBIDDEN: 'Forbidden'
};

export const ErrorMessage = {
    OK: 'OK',
    VALIDATION_FAILED: 'Validation failed',
    UNAUTHORIZED: 'Unauthorized',
    FORBIDDEN: 'Forbidden',
    NOT_FOUND: 'Not found',
    CONFLICT: 'Conflict',
    GATEWAY_TIMEOUT: 'Gateway Timeout',
    UNKNOW_ERROR: 'Unknown'
};

export const LocationType = {
    BODY: 'body',
    QUERY: 'query',
    PARAMS: 'params'
};

export const ResponseCode = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    VALIDATION_FAILED: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
    GATEWAY_TIMEOUT: 504
};
