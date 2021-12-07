/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-02 16:19:46
 * @LastEditors: heting
 * @LastEditTime: 2021-12-02 17:29:00
 */
// var http = require('http');

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-type': 'text/html'})
//   res.write(`<head><meta charset="utf-8"/></head>`)

//   res.end('中文字符')
// }).listen(8888)

// console.log('server running at http://127.0.0.1:8888/')

const http = require('http');
const host = 'localhost';
const port = 8888;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // console.log(req.url)
  let params = getUrlParameters(req.url);
  // console.info(params)
  function getUrlParameters(url) {
    if (url && url.indexOf('?') !== -1) {
      let params = {}
      let urls = url.split('?');
      let arr = urls[1].split('&');
      for (var i = 0, l = arr.length;i < l; i++) {
        let a = arr[i].split('=')
        params[a[0]] = a[1]
      }
      return params
    } else {
      return false
    }
  }
  // res.write(JSON.stringify(params))
  res.end(JSON.stringify(params))
})

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`)
})
