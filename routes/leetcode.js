const fs = require('fs')

const rootPath = `${__dirname}/..`

module.exports = {
  get: async ctx => {
    let result,htmlPath
    let algorithmList
    const { type, id } = ctx.request.query;
    let dir = `${rootPath}/algorithm/`
    if (type && id) {
      dir = `${rootPath}/algorithm/${type}`
    }
    algorithmList = fs.readdirSync(dir)
    algorithmList.forEach(v => {
      if (Number(id) === Number(v.substring(0, v.indexOf('-')))) {
        htmlPath = `${dir}/${v}`
        result = fs.readFileSync(htmlPath, "utf8")
      }
    })
    
    if (result) {
      ctx.body = result
    }
  },
  list: async ctx => {
    const { type } = ctx.request.query;
    let result = []
    let dir = `${rootPath}/algorithm/${type}`
    let algorithmList = fs.readdirSync(dir)
    algorithmList.map(v => {
      let obj = {}
      obj.name = v.substring(0, v.indexOf('.'))
      obj.id =  Number(v.substring(0, v.indexOf('-')))
      obj.des = v.substring(v.indexOf('-')+1, v.indexOf('.'))
      obj.content = '内容'
      result.push(obj)
    })
    ctx.body = result
  }
}