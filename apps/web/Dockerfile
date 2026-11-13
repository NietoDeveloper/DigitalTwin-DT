FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json tsconfig.base.json ./
COPY packages/content packages/content
COPY apps/web apps/web
RUN npm ci --workspace @dtdt/web --workspace @dtdt/content --include-workspace-root=false
RUN npm run build -w @dtdt/web

FROM nginx:1.27-alpine
COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/apps/web/dist /usr/share/nginx/html
EXPOSE 80
