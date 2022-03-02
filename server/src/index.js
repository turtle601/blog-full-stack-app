const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
  ctx.body = 'hello world';
});

app.listen(4000, () => {
  console.log('Listening to http://localhost:4000');
});
