import fs from 'fs';
import path from 'path';
import util from 'util';

import multer from 'multer';

const storageForPostSingle = multer.diskStorage({
    destination: (req, file, callback) => {
        try {
            const dir = path.join(__dirname, '/../../public/uploads/');
            fs.mkdirSync(dir, { recursive: true });
            callback(null, dir);
        } catch (error) {
            callback(error);
        }
    },
    filename: (req, file, callback) => {
        try {
            callback(null, file.originalname);
        } catch (error) {
            callback(error);
        }
    }
});

export const uploadFileStorage = util.promisify(multer({ storage: storageForPostSingle }).array('file'));
