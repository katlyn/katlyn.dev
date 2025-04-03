FROM denoland/deno:alpine-2.2.6
WORKDIR /katlyn-dev
EXPOSE 80

# Copy over finalized files
COPY ./deno.json ./deno.lock ./
COPY ./public ./public
COPY src/views ./views
COPY ./src ./src

RUN deno install --entrypoint --frozen src/index.ts

CMD [ "deno", "task", "start" ]
