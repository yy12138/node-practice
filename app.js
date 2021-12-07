/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-02 18:26:42
 * @LastEditors: heting
 * @LastEditTime: 2021-12-06 15:28:13
 */
const http = require('http')
const host = 'localhost'
const port = 8888
const app = require('./router')
const api = require('./api/api')
const controller = require('./controller/htmlController')
const imgController = require('./controller/imageController')

const server = http.createServer(app)

server.listen(port, host, () => {
  console.log("server listening localhost:8888")
})


// http.createServer((req, res) => {
//   console.log(req.url)
// })