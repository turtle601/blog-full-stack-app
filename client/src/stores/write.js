import { createAction, handleActions } from 'redux-actions';
import { createAPIRequestType } from '../sagas/createRequestSaga';

// type
const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] =
  createAPIRequestType('write/WRITE_POST');

const [UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE] =
  createAPIRequestType('write/UPDATE_POST');

const SET_ORIGINAL_POST = 'wrtie/SET_ORIGINAL_POST';

// actions
export const initailize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD);
export const setOriginalPost = createAction(SET_ORIGINAL_POST, post => post);

export const writePost = createAction(WRITE_POST, ({ title, body, tags }) => ({
  title,
  body,
  tags,
}));

export const updatePost = createAction(
  UPDATE_POST,
  ({ id, title, body, tags }) => ({
    id,
    title,
    body,
    tags,
  }),
);

// 초기 state
const initialState = {
  title: '',
  body: '',
  tags: [],
  post: null,
  postError: null,
  ownPost: null,
};

// reducer
const writeReducer = handleActions(
  {
    [INITIALIZE]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [SET_ORIGINAL_POST]: (state, { payload: post }) => {
      return {
        ...state,
        title: post.title,
        body: post.body,
        tags: post.tags,
        ownPost: post._id,
      };
    },

    [WRITE_POST]: state => ({
      ...state,
      post: null,
      postError: null,
    }),

    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),

    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),

    [UPDATE_POST_SUCCESS]: (state, { payload: post }) => {
      return {
        ...state,
        post,
      };
    },
    [UPDATE_POST_FAILURE]: (state, { payload: postError }) => {
      return {
        ...state,
        postError,
      };
    },
  },
  initialState,
);

export default writeReducer;
