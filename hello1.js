/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-02 17:31:46
 * @LastEditors: heting
 * @LastEditTime: 2021-12-02 17:35:10
 */
var http = require('http')
var url = require('url')
const host = 'localhost'
const port = 8888

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  let params = url.parse(req.url, true).query
  res.end(JSON.stringify(params) + 1)
})

server.listen(port, host, () => {
  console.log('listen localhost:8888')
})