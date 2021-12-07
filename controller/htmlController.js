/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-06 15:20:40
 * @LastEditors: heting
 * @LastEditTime: 2021-12-07 15:22:52
 */
const app = require('../router')
const fs = require('fs')
const path = require('path')

app.get('/home.html', (req, res) => {
  fs.readFile(path.join(path.resolve(__dirname, '..'), 'home.html'), (err, data) => {
    if (err) {
      throw err
    } else {
      res.end(data)
    }
  })
})

app.get('/readme', (req, res) => {
  res.write(`<head><meta charset="utf-8" /></head>`)
  fs.readFile(path.join(path.resolve(__dirname, '..'), 'ReadMe.md'), (err, data) => {
    if (err) {
      throw err
    } else {
      res.end(data)
    }
  })
})

app.get('/upload.html', (req, res) => {
  const htmlResource = fs.readFileSync(path.join(path.resolve(__dirname, '..'), 'upload.html'))
  res.end(htmlResource)
})


app.get('/login.html', (req, res) => {
  const htmlResource = fs.readFileSync(path.join(path.resolve(__dirname, '..'), 'login.html'))
  res.end(htmlResource)
})