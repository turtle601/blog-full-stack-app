import mongoose from 'mongoose';

import Post from '../../models/posts';
import { checkReqPosts, checkReqUpdatePost } from '../../lib/joi/checkReqPost';

const { ObjectId } = mongoose.Types;

// id 검증
export const getPostId = async (ctx, next) => {
  const { id } = ctx.params;

  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }
  try {
    const post = await Post.findById(id);

    if (!post) {
      ctx.status = 404; // Not Found
      return;
    }

    ctx.state.post = post;
  } catch (e) {
    ctx.throw(500, e);
  }

  return next();
};

// Post 작성자가 User인지 확인
export const checkOwnPost = (ctx, next) => {
  const { user, post } = ctx.state;

  console.log(post.user._id);
  console.log(user._id);

  if (post.user._id.toString() !== user._id) {
    ctx.status = 403; // Forbidden
    return;
  }

  return next();
};

// GET api/posts
export const list = async ctx => {
  const { tag, username } = ctx.query;
  const query = {
    ...(username ? { 'user.username': username } : {}),
    ...(tag ? { tags: tag } : {}),
  };

  const page = parseInt(ctx.query.page || '1', 10);

  try {
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();

    const postCount = await Post.countDocuments(query).exec();
    ctx.set('Last-page', Math.ceil(postCount / 10));
    ctx.body = posts.map(post => ({
      ...post,
      body:
        post.body.length > 200 ? `${post.body.slice(0, 200)}...` : post.body,
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

// POST api/posts
export const write = async ctx => {
  if (!ctx.state.user) {
    ctx.status = 401;
    return;
  }

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
    user: ctx.state.user,
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
  ctx.body = ctx.state.post;
};

// DELETE api/posts/{id}
export const remove = async ctx => {
  const { id } = ctx.params;

  try {
    await Post.findByIdAndRemove(id).exec();
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
