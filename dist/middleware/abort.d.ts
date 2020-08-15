import { RequestHandler } from 'express';
/**
 * A simple middleware to mark an aborted request
 * @param req
 * @param res
 * @param next
 */
declare const httpAbortMiddleware: RequestHandler;
export default httpAbortMiddleware;
