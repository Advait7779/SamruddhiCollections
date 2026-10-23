# ==========================================
# Multi-stage Dockerfile for Samruddhi Collection
# Optimized for Coolify / Hostinger VPS
# ==========================================

# Stage 1: Build production bundle
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Clean install dependencies
RUN npm ci

# Copy all project files
COPY . .

# Build static assets with Vite
RUN npm run build

# Stage 2: Production Nginx Server
FROM nginx:alpine

# Copy custom Nginx configuration with SPA routing support
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose web ports (match Coolify Ports Exposes setting)
EXPOSE 80 3000 4003 8080

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
