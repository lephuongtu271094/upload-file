import BaseController from '../../commons/base/controller.base';
import { uploadFileStorage } from '../../utils/upload.utils';

import UploadService from './upload.service';

class UploadController extends BaseController {
    constructor() {
        super(new UploadService());
    }

    async uploadFile(req, res) {
        try {
            await uploadFileStorage(req, null);
            const { files } = req;
            this.response.success(res, files);
        } catch (error) {
            this.response.error(res, error);
        }
    }
}

export default UploadController;
