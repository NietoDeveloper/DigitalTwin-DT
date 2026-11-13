import cors from 'cors';
import express, { type ErrorRequestHandler, type Express } from 'express';
import * as content from '@dtdt/content';

const startedAt = Date.now();

export function createApp(corsOrigins: string[]): Express {
  const app = express();
  app.disable('x-powered-by');
  app.use(cors({ origin: corsOrigins, methods: ['GET'] }));

}
