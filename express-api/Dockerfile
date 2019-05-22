# Get node image
FROM node:10.15.3-alpine

# Set workdir
WORKDIR /api

# Install dependencies
COPY package*.json /api/
RUN npm install

COPY . /api/

EXPOSE 8080

CMD [ "npm", "start" ]
