/*
 * @Descripttion: 连接池
 * @version: 
 * @Author: heting
 * @Date: 2021-12-07 11:49:42
 * @LastEditors: heting
 * @LastEditTime: 2021-12-07 13:45:16
 */
const mysql = require('mysql')
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'ht',
  multipleStatements: true, // 允许同时创建多个连接池
  connectionLimit: 10, // 限制连接池个数
})

const sql = `select * from user`

pool.getConnection((err, db) => {
  if (err) throw err
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result)
    db.release(); // 释放连接池中的数据库连接
    pool.end(); // 关闭连接池,也就是pool不可以getConnection()
  });
})
