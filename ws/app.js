/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-08 11:41:20
 * @LastEditors: heting
 * @LastEditTime: 2021-12-08 13:42:38
 */

const express = require('express')
const app = express()

app.use(express.static('./static/html'))
app.use(express.static('./static/js'))
// 导入WebSocket模块
const WebSocket = require('ws');

// 引用Server类
const WebSocketServer = WebSocket.Server;

// 实例化
const wss = new WebSocketServer({
  port: 3000
})


wss.on("connection", (ws) => {
  console.log('server connection()')
  ws.on("message", (message) => {
    console.log('server received: ' + message)
    setTimeout(() => {
      ws.send(`What's your name?`, (err) => {
        if (err) {
          console.log(`[SERVER] error: ${err}`);
        }
      });
    }, 1000);
  })
})

app.listen(4000)
