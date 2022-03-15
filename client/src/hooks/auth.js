import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { changeField, initializeForm, login, register } from '../stores/auth';

// 로그인 or 회원가입 input value 변경 함수
export const useChangeField = form => {
  const field = useSelector(({ authReducer }) => {
    return {
      form: authReducer[form],
      auth: authReducer.auth,
      authError: authReducer.authError,
    };
  });

  const dispatch = useDispatch();

  const setField = (key, value) => {
    dispatch(changeField({ form, key, value }));
  };

  return [field, setField];
};

// 로그인 or 회원가입 form 초기화 시켜주는 함수
export const useInitializeForm = form => {
  const field = useSelector(({ authReducer }) => {
    return {
      form: authReducer[form],
      auth: authReducer.auth,
      authError: authReducer.authError,
    };
  });

  const dispatch = useDispatch();

  const resetField = () => {
    dispatch(initializeForm(form));
  };

  return [field, resetField];
};

// 회원가입 or 로그인하는 함수
export const useSetAuth = form => {
  const field = useSelector(({ authReducer }) => {
    return {
      form: authReducer[form],
      auth: authReducer.auth,
      authError: authReducer.authError,
    };
  });

  const dispatch = useDispatch();

  const setRegister = (username, password) => {
    dispatch(register({ username, password }));
  };

  const setLogin = (username, password) => {
    console.log('login');
    dispatch(login({ username, password }));
  };

  return [setRegister, setLogin];
};
