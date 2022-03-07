import { checkRegisterUser } from '../../lib/joi/checkReqPost';
import User from '../../models/users';

export const check = ctx => {};

export const register = async ctx => {
  const schema = checkRegisterUser();
  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.body = result.error;
    ctx.status = 400;
    return;
  }

  const { username, password } = ctx.request.body;

  try {
    const exists = User.findByUsername(username);
    if (!exists) {
      ctx.status = 409; // Conflict
      return;
    }
    const user = new User({
      username,
    });

    await user.setPassword(password); // hashedPassword 설정
    await user.save(); // 데이터 베이스 저장

    ctx.body = user.serialize();
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const login = ctx => {
  ctx.body = 'login';
};

export const logout = ctx => {
  ctx.body = 'logout';
};
