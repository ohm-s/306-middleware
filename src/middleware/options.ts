import { RequestHandler } from 'express';
import url from 'url';

/**
 * Express middleware to check CORS 
 * N.B. use ".example.tld" 
 * @param allowedSuffixHosts 
 */
const optionsMiddleware = (allowedSuffixHosts: string[]): RequestHandler => {
  return (req, res, next) => {
    if (req.method === 'OPTIONS') {
      const origin = req.headers.origin || 'http://localhost';
      const parts = url.parse(origin);
      if (parts.host) {
        let sent = false;
        for (const host of allowedSuffixHosts) {
          if (parts.host!.endsWith(host)) {
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
            res.setHeader('Access-Control-Allow-Origin', parts.host!);
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            res.write(JSON.stringify({ status: 'OK' }));
            res.end();
            sent = true;
            break;
          }
        }
        if (!sent) {
          res.send(400);
          res.end();
        }
      } else {
        res.send(400);
        res.end();
      }
    } else {
      next();
    }
  };
};

export default optionsMiddleware;
