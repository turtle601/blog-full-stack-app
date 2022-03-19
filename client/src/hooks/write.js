import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initailize } from '../stores/write';

export const useWriteField = () => {
  const dispatch = useDispatch();
  const field = useSelector(({ writeReducer }) => {
    return {
      title: writeReducer.title,
      body: writeReducer.body,
    };
  });

  const setChangeField = useCallback(
    payload => dispatch(changeField(payload)),
    [dispatch],
  );
  const setInitialize = useCallback(() => dispatch(initailize()), [dispatch]);

  return [field, setChangeField, setInitialize];
};

export const useTagField = () => {
  const dispatch = useDispatch();
  const tags = useSelector(state => state.writeReducer.tags);

  const setChangeTagField = useCallback(newTags => {
    dispatch(changeField({ key: 'tags', value: newTags }));
  });

  return [tags, setChangeTagField];
};
