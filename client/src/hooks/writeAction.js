import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { writePost, updatePost } from '../stores/write';

export const useWrittenState = () => {
  const dispatch = useDispatch();
  const writtenPost = useSelector(({ writeReducer }) => ({
    title: writeReducer.title,
    body: writeReducer.body,
    tags: writeReducer.tags,
    post: writeReducer.post,
    postError: writeReducer.postError,
    ownPost: writeReducer.ownPost,
  }));

  const setPublish = useCallback(() => {
    const { title, body, tags, post, postError, ownPost } = writtenPost;
    if (ownPost) {
      dispatch(
        updatePost({
          id: ownPost,
          title,
          body,
          tags,
        }),
      );
      return;
    }

    dispatch(
      writePost({
        title,
        body,
        tags,
      }),
    );
  }, [writtenPost]);

  return [writtenPost, setPublish];
};
