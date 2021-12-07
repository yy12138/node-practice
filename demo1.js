/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-02 18:03:11
 * @LastEditors: heting
 * @LastEditTime: 2021-12-02 18:05:03
 */
const http = require('http')
const host = 'localhost'
const port = 8888
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  console.log(req.method)
  console.log(req.url)
  res.end('响应成功')
})

server.listen(port, host, () => {
  console.log('listen localhost:8888')
})