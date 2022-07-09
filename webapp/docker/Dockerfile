FROM node:alpine as build

# RUN mkdir /webapp
# COPY . /webapp

# COPY package.json /webapp/package.json
# RUN cd /webapp; npm install

# COPY . /webapp

# EXPOSE 3000

# WORKDIR /webapp

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

# remove dev dependencies
RUN npm prune --production

COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.js ./next.config.js

CMD ["npm", "start"]