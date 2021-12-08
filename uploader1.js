/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-06 16:55:01
 * @LastEditors: heting
 * @LastEditTime: 2021-12-08 10:08:13
 */
const express = require('express')
const fs = require('fs')
const app = express()

const multer = require('multer')
const upload = multer({dest: './static/images'})
app.use(express.static('./static'))
app.use(express.static('./dist')) // http://localhost:9999/index.html

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.body)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // ---------- 因为保存的文件为二进制，取消下面代码块注释可让保存的图片文件在本地文件夹中预览 ------
  // let file_type;
  //   if (req.file.mimetype.split('/')[0] == 'image') file_type = '.' + req.file.mimetype.split('/')[1];
  //   if (file_type) {
  //       fs.rename(req.file.path, req.file.path + file_type, function (err, doc) {
  //           if (err) {
  //               console.error(err);
  //               return;
  //           }
  //           console.log('55');
  //           res.send('./images/' + req.file.filename + file_type)
  //       })
  //       return;
  //   }

  res.send('./images/' + req.file.filename)
})

app.listen(9999, () => {
  console.log('server listen in localhost:9999')
})