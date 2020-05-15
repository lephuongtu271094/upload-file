/**
 * File: auto_bind.js
 * Automatically bind methods to their class instance
 * Author: Le Phuong Tu
 * Created: 11/09/2019
 */

const autoBind = (self) => {
    const listClass = self;
    Object.getOwnPropertyNames(listClass.constructor.prototype).forEach((key) => {
        const val = listClass[key];
        if (key !== 'constructor' && typeof val === 'function') {
            listClass[key] = val.bind(listClass);
        }
    });
    return listClass;
};

export default autoBind;
