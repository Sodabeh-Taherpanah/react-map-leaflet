FROM node:21-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "start"]