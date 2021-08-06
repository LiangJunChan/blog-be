/**
 * Created by ChenLiangjun on 2021/06/21.
 */
const fs = require("fs")
const marked = require("marked")

const rootPath = `${__dirname}/..`

let fileList = fs.readdirSync(`${rootPath}/md`)
fileList.forEach(v => {
  let file = v.substring(0, v.lastIndexOf('.'))
  let filePath = `${rootPath}/md/${v}`
  fs.readFile(filePath, "utf8", (err, markContent) => {
    if (err) {
      throw err
    } else {
      //转化好的html字符串
      let htmlStr = marked(markContent.toString())
      fs.readFile(`${rootPath}/template/template.html`, "utf8", (err, template) => {
        if (err) {
          throw err
        } else {
          const htmlData = template.replace(/@markdown/g, htmlStr)
          let htmlPath
          if (file.match(/^\d/)) {
            htmlPath = `${rootPath}/algorithm/${file}.html`
          } else {
            htmlPath = `${rootPath}/html/${file}.html`
          }
          //将新生成的字符串template重新写入到文件中
          fs.writeFile(htmlPath, htmlData, (err) => {
            if (err) {
              throw err
            } else {
              console.log(`${file}.html write success`)
            }
          })
        }
      })
    }
  })
})