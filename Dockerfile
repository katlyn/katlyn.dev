FROM node:20-alpine as base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /katlyn-dev

FROM base as build

# Install packages
COPY package.json pnpm-lock.yaml tsconfig.json ./
RUN pnpm i --frozen-lockfile

# Compile typescript
COPY ./src ./src
RUN npm run build


FROM base
EXPOSE 80

# Install packages
COPY package.json pnpm-lock.yaml tsconfig.json ./
RUN pnpm i --frozen-lockfile --prod

# Copy over finalized files
COPY ./public ./public
COPY ./views ./views
COPY --from=build /katlyn-dev/dist /katlyn-dev/dist

CMD [ "pnpm", "start" ]
