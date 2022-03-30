import Router from 'koa-router';
import * as postCtrl from './post.ctrl';

import { checkLogin } from '../../lib/utils/checkLogin';

// posts/
const posts = new Router();

posts.get('/', postCtrl.list);
posts.post('/', postCtrl.write);

// posts/{id}
const post = new Router();

post.get('/', postCtrl.read);
post.delete('/', checkLogin, postCtrl.checkOwnPost, postCtrl.remove);
post.patch('/', checkLogin, postCtrl.checkOwnPost, postCtrl.update);

posts.use('/:id', postCtrl.getPostId, post.routes());

export default posts;
