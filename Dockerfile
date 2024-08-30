# Используем официальный образ Node.js как базовый для этапа сборки
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Копируем файл конфигурации Nginx (опционально, если требуется кастомизация)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
