"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Add BoltLogger as property in response locals
 * Removes express header
 * @param logger
 */
const loggerMiddleware = (logger) => {
    return (req, res, next) => {
        res.removeHeader('X-Powered-By'); // removes powered by express header
        logger.log({ url: req.url, headers: req.rawHeaders });
        res.locals.logger = logger;
        next();
    };
};
exports.default = loggerMiddleware;
