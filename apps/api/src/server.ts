import { createApp } from './app.js';

const port = Number(process.env.PORT ?? 4100);
const origins = (process.env.CORS_ORIGINS ?? 'http://localhost:5173,http://localhost:8080')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const server = createApp(origins).listen(port, () => {
  console.log(`[dtdt-api] http://localhost:${port}/api/health`);
});
