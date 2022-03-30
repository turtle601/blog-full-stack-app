import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { readPost, unloadPost } from '../stores/read';
import { setOriginalPost } from '../stores/write';

export const usePostViewer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { post, error, loading, ownUser } = useSelector(
    ({ readReducer, loadingReducer, userReducer }) => {
      return {
        post: readReducer.post,
        error: readReducer.error,
        loading: loadingReducer['post/READ_POST'],
        ownUser: userReducer.user,
      };
    },
  );

  // 함수 많아서 리팩토링...?
  const setReadPost = useCallback(() => dispatch(readPost(id)), [id]);
  const setUnloadPost = useCallback(() => dispatch(unloadPost()), []);
  const setDoEdit = useCallback(() => {
    dispatch(setOriginalPost(post));
  }, [post]);

  return [
    { post, error, loading, ownUser },
    setReadPost,
    setUnloadPost,
    setDoEdit,
  ];
};
