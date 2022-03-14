import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { changeField, initializeForm, register } from '../stores/auth';

// 로그인 or 회원가입 input value 변경 함수
export const useChangeField = form => {
  const field = useSelector(({ authReducer }) => {
    const auth = authReducer.toJS();

    return {
      form: auth[form],
      auth: auth.auth,
      authError: auth.authError,
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
    const auth = authReducer.toJS();

    return {
      form: auth[form],
      auth: auth.auth,
      authError: auth.authError,
    };
  });

  const dispatch = useDispatch();

  const resetField = () => {
    dispatch(initializeForm(form));
  };

  return [field, resetField];
};

// 회원가입하는 함수
export const useSetRegister = form => {
  const field = useSelector(({ authReducer }) => {
    const auth = authReducer.toJS();

    return {
      form: auth[form],
      auth: auth.auth,
      authError: auth.authError,
    };
  });

  const dispatch = useDispatch();

  const setRegister = (username, password) => {
    dispatch(register({ username, password }));
  };

  return setRegister;
};
