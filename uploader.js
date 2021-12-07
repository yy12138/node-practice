/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-06 11:26:03
 * @LastEditors: heting
 * @LastEditTime: 2021-12-07 14:22:09
 */
const http = require('http')
const fs = require('fs')
const multiparty = require('multiparty')

http.createServer((req, res) =>{
  // 允许跨域(不急, 后面跨域会专门来说)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By","3.2.1");
  res.setHeader("Content-Type", "application/json;charset=utf-8");

  // let chunks = [];
  // let size = 0;
  // let buffer = null;
  // let offsets = [];
  // req.on('data', (chunk) => {
  //   // chunk默认为一个二进制数据流, 该方法会执行多次, 需要我们手动累加二进制数据
  //   chunks.push(chunk);
  //   size = chunk.length; // 获取相关Buffer流的大小
  // });

  // req.on('end',() => {
  //   // 合并相关Buffer流
  //   buffer = Buffer.concat(chunks, size);
  //   for(let i = 0;i < buffer.length; i++){
  //     if(buffer[i].toString() == 13 && buffer[i+1].toString() == 10){
  //       offsets.push(i);
  //     }
  //   }
  //   // 获取文件名
  //   let name = buffer.slice(offsets[0], offsets[1]).toString().split(';')[2].split('=')[1];
  //   let filename = name.split("\"");
  //   // 写出文件
  //   let data = buffer.slice(offsets[3] + 2, offsets[offsets.length - 2]);
  //   fs.writeFileSync('./' + filename[1], data);
  // });

  // res.end('文件上传成功');
  console.log(req.body)
  let form = new multiparty.Form()
  form.parse(req, (err, fields, files) => {
    console.log(fields, files)
    let fileData = fs.readFileSync(files.file[0].path)
    let fileName = files.file[0].originalFilename;
    fs.writeFile('./static/images/' + fileName, fileData, (err) => {
      console.log(err)
      res.end(JSON.stringify({data: {code: 1, isSuccess: true, message: '上传成功'}}))
    })
  })
}).listen('9999');

console.log('server listening localhost:9999')