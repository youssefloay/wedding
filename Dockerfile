# Build static site (works with `npm ci --omit=dev` — Vite is in dependencies)
FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Serve at container root; set VITE_BASE=/wedding/ if you reverse-proxy under /wedding/
ARG VITE_BASE=/
ENV VITE_BASE=${VITE_BASE}

RUN npm run build

FROM nginx:1.27-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY docker/nginx-default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
