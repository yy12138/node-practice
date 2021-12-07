/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-02 18:07:43
 * @LastEditors: heting
 * @LastEditTime: 2021-12-02 18:19:39
 */
const http = require('http')
const url = require('url')
const host = 'localhost'
const port = 8888
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  const method = req.method
  const urlr = req.url // 预防get请求url携带参数
  if (method === 'GET') {
    let params = url.parse(urlr, true)
    console.log(params)
    if (params.pathname === '/api/list') {
      res.end('查询列表接口响应')
    } else {
      res.end('get请求响应')
    }
  } else if (method === 'POST') {
    if (urlr === '/api/register') {
      res.end('注册接口响应')
    } else if (urlr === '/api/login') {
      res.end('登录接口响应')
    } else {
      res.end('post请求响应')
    }
  }
})

server.listen(port, host, () => {
  console.log('listen localhost:8888')
})