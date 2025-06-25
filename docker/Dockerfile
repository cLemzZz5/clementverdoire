# Étape 1 : Build SSR Next.js
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Étape 2 : Apache reverse proxy + serveur Node.js
FROM node:20-alpine

RUN apk add --no-cache apache2 apache2-utils && mkdir -p /run/apache2

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app /app
RUN npm ci --omit=dev

COPY docker/apache.conf /etc/apache2/conf.d/default.conf

EXPOSE 80
CMD sh -c "httpd -k start && npm start"
