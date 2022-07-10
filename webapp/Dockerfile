FROM node:alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# remove dev dependencies
RUN npm prune --production

CMD ["npm", "start"]