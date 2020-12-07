FROM balenalib/raspberry-pi-alpine-node:latest

WORKDIR app

COPY package.json .

RUN npm install

COPY index.js .

CMD ["yarn", "run", "start:dev"] 

