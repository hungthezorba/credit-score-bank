FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install App Dependencies
COPY package.json ./
COPY package-lock.json ./


RUN npm install

#Bundle app source
COPY . .
COPY .env.production .env

RUN npm run build


ENV NODE_ENV production

EXPOSE 4000
CMD ["node", "build/index.js"]
USER node