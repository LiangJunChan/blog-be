const Koa = require('koa')
const serve = require('koa-static')
const mount = require('koa-mount')

const app = new Koa()
const port = process.env.BLOG_BE_PORT || 9900

//路由
const router = require('./func/route')
app.use(router.routes())

//静态页面
htmlApp = new Koa()
htmlApp.use(serve('html'))
app.use(mount('/html/',htmlApp))

alApp = new Koa()
alApp.use(serve('algorithm'))
app.use(mount('/algorithm/',alApp))

app.listen(port, () => {
  console.log(`服务已启动,请访问http://localhost:${port} 查看`)
})
