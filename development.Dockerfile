FROM node:18-alpine
EXPOSE 80
WORKDIR /katlyn-dev

# Install packages
COPY package*.json tsconfig.json ./
RUN pnpm i --frozen-lockfile

# Compile typescript
COPY ./public ./public
COPY ./views ./views
COPY ./src ./src
RUN npm run build

CMD [ "pnpm", "run", "start:dev" ]
