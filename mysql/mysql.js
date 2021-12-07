/*
 * @Descripttion: 连接池
 * @version: 
 * @Author: heting
 * @Date: 2021-12-07 13:40:48
 * @LastEditors: heting
 * @LastEditTime: 2021-12-07 13:44:57
 */
const mysql = require('mysql')
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'ht',
  multipleStatements: true,
  connectionLimit: 10
})


let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (error, result) => {
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = {
  query
}