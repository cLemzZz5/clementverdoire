# Étape 1 : Build Next.js
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Étape 2 : Création de l'image finale avec nginx + app
FROM nginx:alpine AS runner

# Copie la config nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copie l'app Next.js standalone
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/messages ./messages

# Expose port 80 (nginx)
EXPOSE 80

# Lance nginx (qui reverse proxy vers le Node.js app)
CMD ["sh", "-c", "node server.js & nginx -g 'daemon off;'"]