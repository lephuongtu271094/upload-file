import { Router } from 'express';

import DownloadController from './download.controller';

const router = Router();
const downloadController = new DownloadController();

router.get('/:fileName', downloadController.downloadFile);

export const downloadRouter = router;
