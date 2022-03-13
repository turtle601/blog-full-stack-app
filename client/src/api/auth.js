import client from './client';

// 로그인
export const login = async ({ username, password }) => {
  return await client.post('/api/auth/login', { username, password });
};

// 회원가입
export const register = async ({ username, password }) => {
  return await client.post('api/auth/register', { username, password });
};

// 로그인 상태 확인
export const check = async () => {
  return await client.get('api/auth/check');
};
