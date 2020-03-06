FROM node:12-alpine

WORKDIR /usr/src/app

RUN touch .env

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

CMD [ "yarn", "serve" ]