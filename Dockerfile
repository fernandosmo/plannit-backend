FROM node:18-alpine3.17

WORKDIR /usr/app
COPY package.json package-lock.json ./

RUN apk add --update redis
RUN npm install

COPY . .

EXPOSE 8000
CMD [ "npm", "start" ]