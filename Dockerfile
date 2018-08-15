FROM node:8.9

WORKDIR /app
CMD node app/web.js

COPY package.json package-lock.json ./
RUN npm install --progress=false

COPY . .
