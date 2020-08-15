import { RequestHandler } from 'express';
import { BoltLogger } from '306-boltlogger';
/**
 * Add BoltLogger as property in response locals
 * Removes express header
 * @param logger
 */
declare const loggerMiddleware: (logger: BoltLogger) => RequestHandler;
export default loggerMiddleware;
