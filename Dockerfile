FROM node:14.15.4

RUN npm install -g firebase-tools 

WORKDIR /usr/src

EXPOSE 3000
EXPOSE 9005