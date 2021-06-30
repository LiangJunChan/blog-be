const fs = require("fs")
const Router = require("koa-router")
const router = new Router()

const rootPath = `${__dirname}/..`

// 加载/routes下的路由
let fileList = fs.readdirSync(`${rootPath}/routes`)
fileList.forEach((v) => {
  if (!v.startsWith(".") && !v.endsWith(".test.js")) {
    let routeName = v.substring(0, v.lastIndexOf('.')) //路由名:build
    let routePath = `${rootPath}/routes/${v}`
    let route = require(routePath);
    let urlPath
    Object.keys(route).map(v => {
      urlPath = v.match(/get|post/) ? `/${routeName}` : `/${routeName}/${v}`
      if (-1 === ['post'].indexOf(v)) {
        router.get(urlPath, route[v]);
      } else {
        router.post(urlPath, route[v]);
      }
    })
  }
})

// 加载html下的路由
let htmlList = fs.readdirSync(`${rootPath}/html`)
htmlList.forEach(v => {
  let routeName = v.substring(0, v.lastIndexOf('.'))
  let htmlPath = `${rootPath}/html/${v}`
  fs.readFile(htmlPath, "utf8", (err, data) => {
    if (err) {
      throw err
    } else {
      router.get(`/${routeName}`, (ctx) => {
        ctx.body = data
      })
    }
  })
})

// 加载algorithm下的路由
// let algorithmList = fs.readdirSync(`${rootPath}/algorithm`)
// algorithmList.forEach(v => {
//   let routeName = v.substring(0, v.indexOf('-'))
//   let htmlPath = `${rootPath}/algorithm/${v}`
//   fs.readFile(htmlPath, "utf8", (err, data) => {
//     if (err) {
//       throw err
//     } else {
//       router.get(`/leetcode/${routeName}`, (ctx) => {
//         ctx.body = data
//       })
//     }
//   })
// })


module.exports = router