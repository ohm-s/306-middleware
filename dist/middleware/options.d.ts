import { RequestHandler } from 'express';
/**
 * Express middleware to check CORS
 * N.B. use ".example.tld"
 * @param allowedSuffixHosts
 */
declare const optionsMiddleware: (allowedSuffixHosts: string[]) => RequestHandler;
export default optionsMiddleware;
