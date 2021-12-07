/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-02 17:46:31
 * @LastEditors: heting
 * @LastEditTime: 2021-12-02 17:49:11
 */
const http = require('http')
const host = 'localhost'
const port = 8888

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})

  let params = {}
  req.on('data', (chunk) => {
    console.log(chunk)
    params += chunk
  })

  req.on('end', () => {
    res.end(params)
  })
})

server.listen(port, host, () => {
  console.log('listen localhost:8888')
})
