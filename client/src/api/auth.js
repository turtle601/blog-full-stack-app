import client from './client';

// 로그인
export const login = async ({ username, password }) => {
  return await client.post('/api/auth/login', { username, password });
};

// 회원가입
export const register = async ({ username, password }) => {
  return await client.post('/api/auth/register', { username, password });
};

// 로그인 상태 확인
export const check = async () => {
  return await client.get('/api/auth/check');
};

// 로그아웃
export const logout = async () => {
  return await client.post('/api/auth/logout');
};

// 포스트 작성
export const writePost = async () => {
  return await client.post('/api/posts');
};
