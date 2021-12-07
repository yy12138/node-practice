/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-07 10:26:24
 * @LastEditors: heting
 * @LastEditTime: 2021-12-07 10:32:01
 */
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'ht'
})

connection.connect()

const addSql = 'INSERT INTO websites(id, name, url, alexa, country) VALUES(0,?,?,?,?)';

const addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];

connection.query(addSql, addSqlParams, (err, result) => {
  if (err) {
    console.log('[insert error] - ', err.message);
    return;
  }

  console.log('--------------------------INSERT----------------------------')
  console.log('insert id:', result);
  console.log('-----------------------------------------------------------------\n\n')
})

connection.end()