import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { check } from '../stores/user';
import { getLoginUser } from '../utils/localStorage';

// user 관련 액션
import { tempSetUser } from '../stores/user';

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
