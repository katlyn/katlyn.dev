FROM node:18-alpine
WORKDIR /katlyn-dev

# Install packages
COPY package*.json tsconfig.json ./
RUN npm ci

# Compile typescript
COPY ./src ./src
RUN npm run build


FROM node:18-alpine
EXPOSE 80
WORKDIR /katlyn-dev

# Install packages
COPY package*.json tsconfig.json ./
RUN npm ci --production

# Copy over finalized files
COPY ./public ./public
COPY ./views ./views
COPY --from=0 /katlyn-dev/dist /katlyn-dev/dist

CMD [ "npm", "start" ]
