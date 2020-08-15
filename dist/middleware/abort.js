"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A simple middleware to mark an aborted request
 * @param req
 * @param res
 * @param next
 */
const httpAbortMiddleware = (req, res, next) => {
    res.locals.requestAborted = false;
    req.on('close', () => {
        res.locals.requestAborted = true;
    });
    next();
};
exports.default = httpAbortMiddleware;
