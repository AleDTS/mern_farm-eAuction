# Get node image
FROM node:10.15.3-alpine

# Set workdir
WORKDIR /app

# Install dependencies
COPY package*.json /app/
RUN npm install

COPY . /app/

CMD [ "npm", "start" ]
