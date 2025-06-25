# Étape 1 : Build de l'app Next.js en mode statique
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Export en site statique
RUN npm run build && npm run export

# Étape 2 : Image finale avec Apache
FROM httpd:2.4-alpine

# Supprime la page d'accueil par défaut d'Apache
RUN rm -rf /usr/local/apache2/htdocs/*

# Copie le site statique généré
COPY --from=builder /app/out/ /usr/local/apache2/htdocs/

EXPOSE 80
CMD ["httpd-foreground"]
