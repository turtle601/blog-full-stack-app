import { createAction, handleActions } from 'redux-actions';
import { createAPIRequestType } from '../sagas/createRequestSaga';

// 1. type (전체 읽기, 성공, 실패)
const [LIST_POST, LIST_POST_SUCCESS, LIST_POST_FAILURE] =
  createAPIRequestType('postList/LIST_POST');

// 2. 액션
export const listPost = createAction(LIST_POST, ({ page, username, tag }) => {
  return {
    page,
    username,
    tag,
  };
});

const initialState = {
  posts: null,
  error: null,
  lastPage: 1,
};

// 리듀서
const listReducer = handleActions(
  {
    [LIST_POST_SUCCESS]: (state, { payload: posts, meta: response }) => {
      return {
        ...state,
        posts,
        lastPage: parseInt(response.headers['last-page'], 10),
      };
    },
    [LIST_POST_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        error,
      };
    },
  },
  initialState,
);

export default listReducer;
