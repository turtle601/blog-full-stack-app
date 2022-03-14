import { checkRegisterUser } from '../../lib/joi/checkReqPost';
import User from '../../models/users';

// 로그인 여부 확인
export const check = ctx => {
  const { user } = ctx.state;
  if (!user) {
    ctx.status = 401; //Unauthorized
    return;
  }
  ctx.body = user;
};

// 회원 등록
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
    const exists = await User.findByUsername(username).exec();

    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }
    const user = new User({
      username,
    });

    await user.setPassword(password); // hashedPassword 설정
    await user.save(); // 데이터 베이스 저장

    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 로그인
export const login = async ctx => {
  const { username, password } = ctx.request.body;

  if (!username || !password) {
    ctx.status = 401;
    return;
  }

  try {
    const user = await User.findByUsername(username);
    if (!user) {
      ctx.status = 401;
      return;
    }

    const valid = await user.checkPassword(password);

    if (!valid) {
      ctx.status = 401;
      return;
    }

    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const logout = ctx => {
  ctx.cookies.set('access_token');
  ctx.status = 204; // No Content
};
