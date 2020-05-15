/* eslint-disable no-console */
import path from 'path';

import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import config from 'config';

import * as routerUtil from '../utils/router.utils';
import { ResponseCode } from '../commons/consts/response.consts';
import Response from '../commons/responses';

import { ConnectsErrorResponse } from './connects.error.response';

const response = new Response();
// config i18n

export default async (app) => {
    app.use(cors('*'));
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use('/api/v1/', express.static(path.join(__dirname, '../../public')));

    await Promise.all([
        // use router api
        app.use(`/api/${config.api_version}`, routerUtil.loadRouters(path.join(__dirname, '/../api')))
    ]);

    /* eslint-disable no-unused-vars */
    // handle app error
    app.use((error, req, res, next) => {
        response.error(res, error);
    });

    // handle end point not found
    app.use((req, res, next) => {
        const errors = JSON.parse(JSON.stringify(ConnectsErrorResponse.connect_error));
        console.error(errors);
        res.status(ResponseCode.NOT_FOUND).json(errors);
    });
};
