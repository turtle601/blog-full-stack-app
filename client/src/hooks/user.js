import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import userReducer, { check } from '../stores/user';

// 로그인 했는지 여부 확인
export const useUserCheck = () => {
  const { user } = useSelector(({ userReducer }) => {
    return {
      user: userReducer.user,
    };
  });

  const dispatch = useDispatch();

  const setUserCheck = () => {
    dispatch(check());
  };

  return [user, setUserCheck];
};
