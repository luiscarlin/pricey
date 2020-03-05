FROM node:12.13.0-alpine AS builder
WORKDIR /usr/src/app
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.16.0
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY --from=builder /usr/src/app/run.sh /run.sh
COPY --from=builder /usr/src/app/nginx-default.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
CMD ["/run.sh"]
