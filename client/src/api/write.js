import client from './client';

// 포스트 작성
export const writePost = async ({ title, body, tags }) => {
  return await client.post('/api/posts', { title, body, tags });
};
