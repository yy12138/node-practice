/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-08 11:50:35
 * @LastEditors: heting
 * @LastEditTime: 2021-12-08 13:42:07
 */
const ws = new WebSocket('ws://localhost:3000/test');
let count = 0;

ws.onmessage = (msg) => {
  console.log(msg)
  count++;
  if (count > 3) {
    ws.send('goodbye')
    ws.close()
  } else {
    setTimeout(() => {
      ws.send(`Hello, I'm Mr No.${count}!`);
    }, 1000);
  }
}

ws.onopen = () => {
  ws.send("Hello~")
}