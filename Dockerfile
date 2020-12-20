FROM node:14

WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production --frozen-lockfile --check-files

COPY main.js .
COPY config.js .
COPY src ./src

EXPOSE 3000
CMD [ "node", "main.js" ]
