FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json tsconfig.base.json ./
COPY packages/content packages/content
COPY apps/api apps/api
RUN npm ci --workspace @dtdt/api --workspace @dtdt/content --include-workspace-root=false --include=dev
USER node
EXPOSE 4100
HEALTHCHECK --interval=15s --timeout=3s CMD wget -qO- http://127.0.0.1:4100/api/health || exit 1
CMD ["npx", "tsx", "apps/api/src/server.ts"]
