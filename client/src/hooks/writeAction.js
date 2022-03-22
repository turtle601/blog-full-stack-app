import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { writePost } from '../stores/write';

export const useWrittenState = () => {
  const dispatch = useDispatch();
  const writtenPost = useSelector(({ writeReducer }) => ({
    title: writeReducer.title,
    body: writeReducer.body,
    tags: writeReducer.tags,
    post: writeReducer.post,
    postError: writeReducer.postError,
  }));

  const setPublish = useCallback(() => {
    const { title, body, tags, post, postError } = writtenPost;
    console.log(title, body, tags);
    console.log(typeof body);
    dispatch(
      writePost({
        title,
        body,
        tags,
      }),
    );
  });

  return [writtenPost, setPublish];
};
