FROM strapi/base

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

ENV PATH /app/node_modules/.bin:$PATH

