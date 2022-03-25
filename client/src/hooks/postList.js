import qs from 'qs';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

// 액션
import { listPost } from '../stores/postList';

export const usePostList = () => {
  const { username } = useParams();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { posts, error, loading, userInfo } = useSelector(
    ({ loadingReducer, listReducer, userReducer }) => {
      return {
        posts: listReducer.posts,
        error: listReducer.error,
        loading: loadingReducer['postList/LIST_POST'],
        userInfo: userReducer.user,
      };
    },
  );

  // qs 라이브러리 => tag와 page값 알기
  const { tag, page } = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  const setPostList = useCallback(() => {
    dispatch(listPost({ page, username, tag }));
  }, [listPost]);

  return [{ posts, error, loading, userInfo }, setPostList];
};
