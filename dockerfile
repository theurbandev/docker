# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /docker
COPY . .
RUN npm install
CMD ["node", "src/index.js"]
EXPOSE 3000