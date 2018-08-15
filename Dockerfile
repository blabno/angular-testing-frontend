FROM node:8.9

WORKDIR /app
CMD node app/web.js

COPY backend/package.json backend/yarn.lock ./backend/
RUN cd backend && yarn install

COPY package.json package-lock.json ./
RUN npm install --progress=false && npm run webdriver-manager-update
COPY . .
