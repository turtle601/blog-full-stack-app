import qs from 'qs';
import client from './client';

// 포스트 작성
export const writePost = async ({ title, body, tags }) => {
  return await client.post('/api/posts', { title, body, tags });
};

// 포스트 읽기
export const readPost = async id => {
  return await client.get(`/api/posts/${id}`);
};

// 전체 포스트 읽기
export const listPost = async ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return await client.get(`/api/posts/?${queryString}`);
};

// 포스트 수정
export const updatePost = async ({ id, title, body, tags }) => {
  return await client.patch(`/api/posts/${id}`, { title, body, tags });
};
