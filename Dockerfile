# Étape 1 : Build Next.js
FROM node:20-alpine AS base

# Étape deps
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Étape build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Étape finale : App + Nginx
FROM node:20-alpine AS runner

# Installe nginx
RUN apk add --no-cache nginx

WORKDIR /app

# Copie les fichiers Next.js
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/messages ./messages

# Copie la config nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Crée un dossier nginx requis
RUN mkdir -p /run/nginx

EXPOSE 80

# Lancer node + nginx
CMD sh -c "node server.js & nginx -g 'daemon off;'"