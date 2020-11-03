const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const path = require('path')
const fs = require('fs')

const staticPath = './labeled_images'
app.use(serve(path.join(__dirname,staticPath)))

app.use(async (ctx, next) => {
    if (ctx.request.path === '/index') {
    ctx.type = 'text/html';
    ctx.body = fs.createReadStream('./index.html');
    } else {
      await next();
    }
  });

app.listen(4100)
