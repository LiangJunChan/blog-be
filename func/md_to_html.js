/**
 * Created by liyinghao on 2016/11/8.
 */
 const fs = require('fs')
 const marked = require('marked')
 fs.watchFile('../md/note.md',(curr,prev)=>{
     //读取准备好的html模板文件
     fs.readFile('../html/template.html','utf8',(err,template)=>{
         if(err){
             throw err
         }else{
             fs.readFile('../md/note.md','utf8',(err,markContent)=>{
                 if(err){
                     throw err
                 }else{
                     //转化好的html字符串
                     let htmlStr = marked(markContent.toString());
                     //将html模板文件中的'@markdown' 替换为 html字符串
                     template = template.replace(/markdown/g, htmlStr)
                     //将新生成的字符串template重新写入到文件中
                     fs.writeFile('../html/a_1.html',template,err=>{
                         if(err){
                             throw err
                         }else{
                             console.log("success");
                         }
                     })
                 }
             })
         }
     })
 });