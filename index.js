const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const mount = require('koa-mount')

const app = new Koa()
const port = process.env.BLOG_BE_PORT || 9900
const router = new Router()

const articles = require('./routes/articles')
router.get('/articles', articles.list)

app.use(router.routes())

htmlApp = new Koa()
htmlApp.use(serve('html'))
app.use(mount('/html/',htmlApp))

app.listen(port, () => {
  console.log(`服务已启动,请访问http://localhost:${port} 查看`)
})
