FROM balenalib/raspberry-pi-alpine-node:latest

WORKDIR client 

COPY package.json .

RUN npm install

COPY ./src /src
COPY ./client /client

CMD ["yarn", "start"] 
