/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-06 15:27:03
 * @LastEditors: heting
 * @LastEditTime: 2021-12-06 16:09:54
 */
const app = require('../router')
const path = require('path')
const fs = require('fs')
const mime = require('mime')
// console.log(path.join(__filename, 'images'), __filename)

app.use((pathname, req, res) => {
  let filename = path.join(path.resolve(__dirname, '..'), pathname)
  fs.readFile(filename, 'binary', (err, data) => {
    if (err) {
      console.log(err)
      res.setHeader('Content-Type', 'text/plain;charset=utf-8')
      res.end('未找到文件')
    } else {
      console.log(data)
      // res.setHeader('Content-Type', mime.getType(pathname))
      res.write(data, 'binary')
      res.end()
    }
  })
})
