/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-06 15:21:41
 * @LastEditors: heting
 * @LastEditTime: 2021-12-07 16:48:37
 */
const app = require('../router')

const queryString = require('querystring')

const test_sql = require('../mysql/test_sql')

app.post('/api/registry', (req, res) => {
  res.write(`<head><meta charset="utf-8" /></head>`)
  res.end('注册接口响应')
})

app.post('/api/login', (req, res) => {
  console.log(req.body)
  res.write(`<head><meta charset="utf-8" /></head>`)
  res.end("登录接口响应")
})

app.get('/api/list', (req, res) => {
  res.write(`<head><meta charset="utf-8" /></head>`)
  res.end("查询列表接口响应")
})

app.post('/api/isExistUser', (req, res) => {
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  const data = queryString.parse(req.body)
  test_sql.getUserList().then(result => {
    let list = result;
    let flag = false
    for (user of list) {
      if (data.username === user.username) {
        flag = true
      }
    }
    if (flag) {
      res.end(JSON.stringify({ data: { code: 1, message: '该用户存在' } }))
      return
    } else {
      res.end(JSON.stringify({ data: { code: 0, message: '该用户不存在' } }))
      return
    }
  })
  // res.end(JSON.stringify({ data: { code: 1, message: '响应成功' } })) // 此处不能再写res.end
})
