module.exports = {
  get: async ctx => {
    ctx.set('Access-Control-Allow-Credentials', 'true');
    console.log(ctx.response.header)
    ctx.cookies.set('test', 'test123', { maxAge: 1000 * 3600 });
    if (ctx.query.token) {
      console.log(ctx.query.token)
      ctx.cookies.set('B-token', ctx.query.token, { maxAge: 1000 * 3600 });
    }
    ctx.body = 'autobuild web'
  }
}