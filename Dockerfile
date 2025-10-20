FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm instal

EXPOSE 4545

CMD ["node","index.js"]


