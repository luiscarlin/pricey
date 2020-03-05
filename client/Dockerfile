FROM node:12.13.0-alpine AS builder
WORKDIR /usr/src/app
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.16.0
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY --from=builder /usr/src/app/nginx-default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
