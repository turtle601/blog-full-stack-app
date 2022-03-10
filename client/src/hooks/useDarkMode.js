import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { darkAction } from '../stores/dark';

export const useDarkMode = () => {
  const dark = useSelector(state => state.darkReducer.switch);
  const dispatch = useDispatch();
  const setDarkMode = useCallback(() => dispatch(darkAction()));

  return [dark, setDarkMode];
};
