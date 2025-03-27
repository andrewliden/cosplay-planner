FROM node:alpine as cosplan-builder
COPY ./ /var/build/
WORKDIR /var/build/
RUN yarn install
RUN yarn build

FROM node:alpine as cosplan-runner
COPY --from=cosplan-builder /var/build/build /var/www/cosplan
WORKDIR /var/www/
RUN node cosplan