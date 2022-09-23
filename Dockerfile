FROM node:16-alpine
WORKDIR /app 
ADD package.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --omit=dev; \
    fi
ADD . ./ 
ENV PORT 3000
EXPOSE $PORT
CMD ["node","app.js"]  
