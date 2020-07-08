import { Application, Router, send, join } from './dependencies.js';

import { default as content } from './src/server.jsx';

const app = new Application();


const clientBundle = "/bundle.js";

const html =
  `<html>
    <head>
      <script type="module" src="${clientBundle}"></script>
    </head>
    <body>
      <div id="root">${content}</div>
    </body>
  </html>`;

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = html;
});


app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx) => {
  const filePath = ctx.request.url.pathname;
  const fileWhitelist = [
    clientBundle
  ];
  if (fileWhitelist.indexOf(filePath) > -1) {
    await send(ctx, filePath, {
      root: join(Deno.cwd(),'public'),
    });  
  }
});

app.listen({ port: 3000 });

console.log("App listening on port 3000");
