FROM node:14 AS front-what-chat

RUN mkdir -p /usr/src/app
VOLUME ["/what-chat"]
WORKDIR /usr/src/app

COPY ./build ./build
COPY ./server/server.js ./
COPY ./server/package.json ./

RUN apt-get update -y
RUN npm install
RUN npm install pm2 -g

EXPOSE 8080

CMD ["pm2-runtime", "server.js"]
