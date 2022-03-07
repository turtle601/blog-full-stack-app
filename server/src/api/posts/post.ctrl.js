import Post from '../../models/users';

// GET api/posts
export const list = async ctx => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// POST api/posts
export const write = async ctx => {
  ctx.body = 'write';
};

// GET api/posts/{postId}
export const read = ctx => {
  ctx.body = 'read';
};

// DELETE api/posts/{postId}
export const remove = ctx => {
  ctx.body = 'remove';
};

// PATCH api/posts/{postid}
export const patch = ctx => {
  ctx.body = 'patch';
};
