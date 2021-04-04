FROM node:15-alpine
WORKDIR /usr/build
COPY package.json package-lock.json /usr/build/
RUN npm ci
COPY . /usr/build/
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=0 /usr/build/dist /usr/share/nginx/html
