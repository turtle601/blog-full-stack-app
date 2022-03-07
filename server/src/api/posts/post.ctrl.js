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
export const read = async ctx => {
  const { postId } = ctx.params;
  try {
    const post = await Post.findById(postId).exec();
    if (!post) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// DELETE api/posts/{postId}
export const remove = ctx => {
  ctx.body = 'remove';
};

// PATCH api/posts/{postid}
export const patch = ctx => {
  ctx.body = 'patch';
};
