// Google AI Gateway

import { Context} from '@oak/oak/context';
import { Router} from '@oak/oak/router';
import { Application} from '@oak/oak/application';

const
port   = parseInt(Deno.env.get('GOOGLE_AI_GATEWAY_PORT') || '3000'),
router = new Router()
.get("/", (ctx: Context) => {
  ctx.response.body = 
  `<!DOCTYPE html>
    <html>
      <head><title>Google AI Gateway</title><head>
      <body>
        <h1>Google AI Gateway</h1>
        <p>Current time: ${new Date()}</p>
      </body>
    </html>`;
});

new Application()
.use(router.routes())
.use(router.allowedMethods())
.listen({ port });
