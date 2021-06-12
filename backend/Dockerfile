FROM node:14

# Create app directory
WORKDIR /backend

# Install App Dependencies
COPY package*.json ./

RUN npm install

#Bundle app source
COPY . .

RUN npm run build


ENV NODE_ENV production

EXPOSE 8080
CMD ["node", "dist/index.js"]
USER node