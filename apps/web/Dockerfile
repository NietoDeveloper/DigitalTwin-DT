FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json tsconfig.base.json ./
COPY packages/content packages/content
COPY apps/web apps/web
RUN npm ci --workspace @dtdt/web --workspace @dtdt/content --include-workspace-root=false
RUN npm run build -w @dtdt/web
