import fs from 'fs';
import path from 'path';

import logger from 'morgan';

export default (app) => {
    const env = process.env.NODE_ENV;
    if (env === 'production') {
        app.use(logger('common', {
            stream: fs.createWriteStream(path.join(__dirname, '../../log/access_api.log'), { flags: 'a' })
        }));
    }

    if (env === 'development') {
        app.use(logger(':date[web] :user-agent :method :url :status :res[content-length] - :response-time ms'));
    }
};
