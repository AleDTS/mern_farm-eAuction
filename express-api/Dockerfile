# Get node image
FROM node:10.15.3-alpine

# Add bash
RUN apk update
RUN apk upgrade
RUN apk add bash

# Set workdir
WORKDIR /api

# Install dependencies
COPY package*.json /api/
RUN npm install

COPY . /api/
#https://github.com/vishnubob/wait-for-it
COPY ./wait-for-it.sh /usr/local
RUN ["chmod", "+x", "/usr/local/wait-for-it.sh"]

# EXPOSE 3000

# CMD [ "npm", "start" ]
