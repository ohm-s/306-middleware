import { RequestHandler } from 'express';
import { BoltLogger } from '306-boltlogger';

/**
 * Add BoltLogger as property in response locals
 * Removes express header
 * @param logger
 */
const loggerMiddleware = (logger: BoltLogger): RequestHandler => {
  return (req, res, next) => {
    res.removeHeader('X-Powered-By'); // removes powered by express header
    logger.log({ url: req.url, headers: req.rawHeaders });
    res.locals.logger = logger;
    next();
  };
};

export default loggerMiddleware;
