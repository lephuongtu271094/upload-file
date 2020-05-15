/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/**
 * Manage Router
 * Author: Le Phuong Tu
 * Created: 11/09/2019
 *
 */
import path from 'path';
import fs from 'fs';

import { Router } from 'express';
import _ from 'lodash';

/**
 * Function: Get path router
 * @param {String} folderPath path of router file
 * @param {Number} level level of router file
 * @returns {String} router api by folder
 */
const _getPathRouter = (folderPath, level) => {
    try {
        let pathRouter = '';
        let exportName = '';
        const listFolderInPath = folderPath.split('/').reverse();
        if (!level) {
            const [folderName] = listFolderInPath;
            pathRouter = `/${folderName}`;
            exportName = folderName;
        } else {
            for (let i = 0; i < level + 1; i++) {
                pathRouter += `/${listFolderInPath[level - i]}`;
                if (i >= 1) {
                    exportName += _.capitalize(listFolderInPath[level - i]);
                } else {
                    exportName += listFolderInPath[level - i];
                }
            }
        }

        return {
            pathRouter,
            exportName
        };
    } catch (error) {
        console.error('_getPathRouter error:', error);
    }
};

/**
 * Function: Load item sub router
 * @param {Object} routerMgr router manager
 * @param {String} rootRouterFolderPath root router folder path
 * @param {String} folderName folder name
 * @param {Number} level level of router
 */
const _loaditemSubRouter = (routerMgr, rootRouterFolderPath, folderName, level) => {
    try {
        const itemInFolder = fs.readdirSync(path.join(rootRouterFolderPath, folderName));
        for (const itemName of itemInFolder) {
            if (itemName.indexOf('.router.js') >= 0) {
                // get path of router api
                const {
                    pathRouter,
                    exportName
                } = _getPathRouter(path.join(rootRouterFolderPath, folderName), level);
                // require router file
                const router = require(path.join(rootRouterFolderPath, folderName, itemName));

                if (router[`${exportName}Router`]) {
                    // use router file
                    routerMgr.use(pathRouter, router[`${exportName}Router`]);
                } else {
                    // error export file name
                    console.error(`can not create router ${exportName}, use: export const ${exportName}Router = router`);
                }
            }
            // check sub router folder
            const isDir = fs.lstatSync(`${rootRouterFolderPath}/${folderName}/${itemName}`).isDirectory();
            if (isDir) {
                // recusive load item sub router
                _loaditemSubRouter(routerMgr, `${rootRouterFolderPath}/${folderName}`, itemName, level + 1);
            }
        }
    } catch (error) {
        console.error('_loaditemSubRouter error: ', error);
    }
};

/**
 * Function: Load routers(*.router.js) files in target folder
 * @param {String} rootRouterFolderPath root router folder path
 * @returns {Object} router manager
 */
export const loadRouters = (rootRouterFolderPath) => {
    try {
        const routerMgr = Router();
        const rootRouterFolder = fs.readdirSync(rootRouterFolderPath);
        for (const folderName of rootRouterFolder) {
            const isDir = fs.lstatSync(`${rootRouterFolderPath}/${folderName}`).isDirectory();
            if (isDir) {
                _loaditemSubRouter(routerMgr, rootRouterFolderPath, folderName, 0);
            }
        }
        return routerMgr;
    } catch (error) {
        console.error('loadRouters error: ', error);
    }
};
