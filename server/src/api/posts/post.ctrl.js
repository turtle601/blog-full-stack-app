import mongoose from 'mongoose';

import Post from '../../models/posts';
import { checkReqPosts, checkReqUpdatePost } from '../../lib/joi/checkReqPost';

const { ObjectId } = mongoose.Types;

// id 검증
export const checkPostId = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; //Bad Request
    return;
  }

  return next();
};

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
  const schema = checkReqPosts();

  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// GET api/posts/{id}
export const read = async ctx => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// DELETE api/posts/{id}
export const remove = async ctx => {
  const { id } = ctx.params;

  try {
    await Post.findByIdAndDelete(id).exec();
    ctx.status = 204; // No Content
  } catch (e) {
    ctx.throw(500, e);
  }
};

// PATCH api/posts/{id}
export const update = async ctx => {
  const { id } = ctx.params;

  const schema = checkReqUpdatePost();

  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.body = result.error;
    ctx.status = 400;
    return;
  }
  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();

    if (!post) {
      ctx.status = 404;
      return;
    }

    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
