import Router from 'koa-router';
import * as postCtrl from './post.ctrl';

const posts = new Router();

posts.get('/', postCtrl.list);

posts.post('/', postCtrl.write);

posts.get('/:id', postCtrl.checkPostId, postCtrl.read);

posts.delete('/:id', postCtrl.checkPostId, postCtrl.remove);

posts.patch('/:id', postCtrl.checkPostId, postCtrl.update);

export default posts;
