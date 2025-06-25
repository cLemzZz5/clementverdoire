FROM node:20-alpine

# Installer Apache avec proxy modules
RUN apk add --no-cache apache2 apache2-utils && \
    mkdir -p /run/apache2 && \
    sed -i '/^#LoadModule proxy_module/s/^#//' /etc/apache2/httpd.conf && \
    sed -i '/^#LoadModule proxy_http_module/s/^#//' /etc/apache2/httpd.conf

# Définir dossier de l’app
WORKDIR /app

# Variables d'env
ENV NODE_ENV=production
ENV PORT=3000

# Copier et installer app
COPY . /app
RUN npm ci && npm run build

# Copier la config apache
COPY docker/apache.conf /etc/apache2/conf.d/default.conf

EXPOSE 80

# Lancer Apache + Next
CMD sh -c "httpd -D FOREGROUND & npm start"
