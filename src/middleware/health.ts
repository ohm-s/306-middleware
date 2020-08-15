import { RequestHandler } from 'express';

/**
 * Default health middleware
 * @param req
 * @param res
 * @param next
 */
const healthMiddleware = (healthCheckCallback: () => boolean): RequestHandler => {
  return (req, res, next) => {
    if (req.url === '/health') {
      if (healthCheckCallback()) {
        res.write(JSON.stringify({ status: 'ok' }));
        res.end();
      } else {
        res.writeHead(500);
        res.write(JSON.stringify({ status: 'failed' }));
        res.end();
      }
    } else {
      next();
    }
  };
};

export default healthMiddleware;
