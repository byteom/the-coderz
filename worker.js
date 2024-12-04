// worker.js
import { createRequestHandler } from '@cloudflare/next-on-pages';

export default {
  async fetch(req, env) {
    return createRequestHandler({ request: req, env });
  },
};
