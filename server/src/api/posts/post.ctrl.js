import Joi from 'joi';
import mongoose from 'mongoose';

import Post from '../../models/users';

const { ObjectId } = mongoose.Types;

// postId 검증
export const checkPostId = async (ctx, next) => {
  const { postId } = ctx.params;
  if (!ObjectId.isValid(postId)) {
    ctx.status = 400;
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
  // 검증할 스키마 객체 생성
  const schema = Joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(), // 문자열로 이루어짐
  });

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
