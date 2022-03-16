// actions
import { tempSetUser, check } from '../stores/user';

export const setLoginUser = user => {
  try {
    localStorage.setItem('user', JSON.stringify(user));
  } catch (e) {
    console.log(e);
  }
};

export const getLoginUser = () => {
  try {
    return localStorage.getItem('user');
  } catch (e) {
    console.log(e);
  }
};

export const removeLoginUser = () => {
  try {
    localStorage.removeItem('user');
  } catch (e) {
    console.log(e);
  }
};

export const loadUser = store => {
  try {
    const loginUser = getLoginUser();
    if (!loginUser) return;
    store.dispatch(tempSetUser(loginUser));
    store.dispatch(check());
  } catch (e) {
    console.log('localStorage is not working');
  }
};
