/* eslint-disable no-console */
import http from 'http';

import express from 'express';
import config from 'config';

import connectApp from './src/connects/app';
// import https from 'https';
// import fs from 'fs';
const app = express();
const launchedAt = Date.now();
connectApp(app);

/**
 * How to set up https server
 * ref: https://github.com/sagardere/set-up-SSL-in-nodejs
 */
// const options = {
//     key: fs.readFileSync(__dirname + '/certificates/node_base.key'),
//     cert: fs.readFileSync(__dirname + '/certificates/node_base.crt')
// }

const httpServer = http.createServer(app);
// const httpsServer = https.createServer(options, app);

httpServer.listen(config.port, (errors) => {
    if (errors) {
        console.log('⚠️ Server wasn\'t able to start properly.');
        console.error(errors);
        return;
    }
    console.log('=========================================================');
    console.info('Time:', new Date());
    console.info('Launched in:', `${Date.now() - launchedAt} ms`);
    console.info('Environment:', `${process.env.NODE_ENV || 'development'}`);
    console.info('App path:', process.cwd());
    console.info('To shut down your server, press <CTRL> + C at any time');
    console.log('=========================================================');
    console.info(`⚡️ Server: ${config.host}:${config.port}`);
    console.log('=========================================================');
});

// httpsServer.listen(config.port, () => {
//     console.log("Https server listing on port : " + httpsPort)
// });
