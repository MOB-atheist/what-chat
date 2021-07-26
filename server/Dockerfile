FROM node:14
WORKDIR /app
COPY ./dist/* package.json
RUN npm install --production --quiet
EXPOSE 80