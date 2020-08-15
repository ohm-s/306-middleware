"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Default health middleware
 * @param req
 * @param res
 * @param next
 */
const healthMiddleware = (healthCheckCallback) => {
    return (req, res, next) => {
        if (req.url === '/health') {
            if (healthCheckCallback()) {
                res.write(JSON.stringify({ status: 'ok' }));
                res.end();
            }
            else {
                res.writeHead(500);
                res.write(JSON.stringify({ status: 'failed' }));
                res.end();
            }
        }
        else {
            next();
        }
    };
};
exports.default = healthMiddleware;
