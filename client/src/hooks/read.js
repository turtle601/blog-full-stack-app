import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { readPost, unloadPost } from '../stores/read';

export const usePostViewer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { post, error, loading } = useSelector(
    ({ readReducer, loadingReducer }) => {
      return {
        post: readReducer.post,
        error: readReducer.error,
        loading: loadingReducer['post/READ_POST'],
      };
    },
  );

  const setReadPost = useCallback(() => dispatch(readPost(id)), [id]);
  const setUnloadPost = useCallback(() => dispatch(unloadPost()), []);

  return [{ post, error, loading }, setReadPost, setUnloadPost];
};
