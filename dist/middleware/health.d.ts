import { RequestHandler } from 'express';
/**
 * Default health middleware
 * @param req
 * @param res
 * @param next
 */
declare const healthMiddleware: (healthCheckCallback: () => boolean) => RequestHandler;
export default healthMiddleware;
