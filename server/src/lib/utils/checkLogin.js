export const checkLogin = (ctx, next) => {
  if (!ctx.state.user) {
    ctx.status = 401; // UnAuthorized
    return;
  }
  return next();
};
