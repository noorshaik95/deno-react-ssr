# Deno React Server-Side Rendering

## Requirements

1. Download and install Deno: https://deno.land/
2. Download and install Docker (optional): https://www.docker.com/

## Run Using Deno
1. Run `deno bundle --config tsconfig.json ./src/client.jsx ./public/bundle.js` to create a bundle of client side
2. After the client side is bundled run `deno run --allow-net --allow-read mod.js`

## Run Using Docker
1. Build the docker image by running `docker build .`
2. Start the image `docker run -p 3000:3000 {containerTag/containerId}` 

