import cors from 'cors';
import express, { type ErrorRequestHandler, type Express } from 'express';
import * as content from '@dtdt/content';

const startedAt = Date.now();

export function createApp(corsOrigins: string[]): Express {
  const app = express();
  app.disable('x-powered-by');
  app.use(cors({ origin: corsOrigins, methods: ['GET'] }));

  const collections = {
    plans: content.plans,
    steps: content.steps,
    feature=60');
      res.json({ data, meta: { pricesAsOf: content.PRICES_AS_OF } });
    });
  }

  app.use('/api', (_req, res) => {
    res.status(404).json({ error: { code: 'not_found', message: 'Unknown endpoint' } });
  });

  const onError: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ error: { code: 'internal', message: 'Unexpected error' } });
  };
  app.use(onError);
  return app;
}
