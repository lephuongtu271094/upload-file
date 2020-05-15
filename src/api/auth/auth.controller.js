import BaseController from '../../commons/base/controller.base';

import AuthenticateService from './auth.service';

class AuthenticateController extends BaseController {
    constructor() {
        super(new AuthenticateService());
    }

    async authenticateNormalUser(req, res) {
        try {
            const data = await this.service.authenticateNormalUser(req.body);

            return this.response.success(res, { data: { token: data } });
        } catch (error) {
            return this.response.error(res, error);
        }
    }
}

export default AuthenticateController;
