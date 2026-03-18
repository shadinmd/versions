# Build stage
FROM node:20-alpine AS build
WORKDIR /app
ARG VITE_APP_VERSION
ENV VITE_APP_VERSION=$VITE_APP_VERSION
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve stage
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
