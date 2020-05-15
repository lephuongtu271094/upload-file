import { Router } from 'express';

import UploadController from './upload.controller';

const router = Router();
const uploadController = new UploadController();

router.post('/', uploadController.uploadFile);

export const uploadRouter = router;
