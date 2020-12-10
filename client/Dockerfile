FROM balenalib/raspberry-pi-alpine-node:latest

WORKDIR client 

COPY package.json .

RUN npm install

COPY . .

CMD ["yarn", "start"] 
