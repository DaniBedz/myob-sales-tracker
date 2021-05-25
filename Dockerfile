FROM node:14-alpine

ADD package.json /tmp/package.json

RUN cd /tmp && npm install -q

ADD ./ /src
RUN rm -rf /src/node_modules && cp -a /tmp/node_modules /src/

WORKDIR /src

RUN npm run build

CMD ["node", "build/js/index.js"]