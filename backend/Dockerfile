FROM node:14-alpine


# Create app directory
WORKDIR /usr/src/app

# Install App Dependencies
COPY package.json ./
COPY package-lock.json ./

# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies
RUN npm install -g node-gyp
RUN npm install argon2



#Bundle app source
COPY . .
COPY .env.production .env

RUN npm run build


ENV NODE_ENV production

EXPOSE 4000
CMD ["node", "build/index.js"]
USER node