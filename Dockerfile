FROM hayd/deno:alpine-1.1.0

WORKDIR /app

COPY . .

RUN deno bundle --config tsconfig.json ./src/client.jsx ./public/bundle.js

CMD ["run",  "--allow-net", "--allow-read", "mod.js"]

EXPOSE 3000