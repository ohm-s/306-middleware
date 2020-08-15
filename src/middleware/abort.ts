import { RequestHandler } from 'express';

/**
 * A simple middleware to mark an aborted request
 * @param req
 * @param res
 * @param next
 */
const httpAbortMiddleware: RequestHandler = (req, res, next) => {
  res.locals.requestAborted = false;
  req.on('close', () => {
    res.locals.requestAborted = true;
  });
  next();
};

export default httpAbortMiddleware;
