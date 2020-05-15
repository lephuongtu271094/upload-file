// import fs from 'fs';

import BaseController from '../../commons/base/controller.base';
// import NotFoundError from '../../commons/errors/not_found.error';

import DownloadService from './download.service';

class DownloadController extends BaseController {
    constructor() {
        super(new DownloadService());
    }

    async downloadFile(req, res) {
    //     try {
    //         const { fileName } = req.params;
    //         console.log(fileName)
    //         const filePath = `${__dirname}/../../../public/uploads/${fileName}`;

    //         if (fs.existsSync(filePath)) {
    //             const readStream = await fs.createReadStream(filePath);
    //             res.pipe(readStream);
    //             // readStream.pipe(res);
    //             return;
    //         }
    //         throw new NotFoundError('file not found');
    //     } catch (error) {
    //         this.response.error(res, error);
    //     }
    }
}

export default DownloadController;
