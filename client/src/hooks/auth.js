import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { changeField, initializeForm } from '../stores/auth';

// 로그인 or 회원가입 input value 변경 함수
export const useChangeField = form => {
  const field = useSelector(state => {
    return state.authReducer.toJS()[form];
  });

  const dispatch = useDispatch();

  const setField = (key, value) => {
    dispatch(changeField({ form, key, value }));
  };

  return [field, setField];
};

// 로그인 or 회원가입 form 초기화 시켜주는 함수
export const useInitializeForm = form => {
  const field = useSelector(state => {
    return state.authReducer.toJS()[form];
  });

  const dispatch = useDispatch();

  const resetField = () => {
    dispatch(initializeForm(form));
  };

  return [field, resetField];
};
