import config from 'config';

import { ErrorMessage } from '../commons/consts/response.consts';

export const ConnectsErrorResponse = {
    connect_error: {
        code: 'connect_error',
        error: ErrorMessage.NOT_FOUND,
        message: `End-point not found, see endpoint on ${config.domain}/api-docs 
        or see test report on ${config.domain}/report and ${config.domain}/coverage`
    }
};
