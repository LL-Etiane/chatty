FROM node:16-alpine as frontend

WORKDIR /app
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend ./
RUN npm run build

FROM nginx:alpine
RUN mkdir /app
COPY --from=frontend /app/dist /app