require('dotenv').config();

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

const { PORT, MONGO_URI } = process.env;

const port = PORT || 4000;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(e => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();

app.use(ctx => {
  ctx.body = 'hello world';
});

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log('Listening to http://localhost:4000');
});
