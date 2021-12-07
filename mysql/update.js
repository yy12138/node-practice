/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-07 10:33:58
 * @LastEditors: heting
 * @LastEditTime: 2021-12-07 10:37:28
 */
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'ht'
})

connection.connect();

const updateSql = 'UPDATE websites SET name = ?, url = ? WHERE id = ?';
const updateParams = ['菜鸟移动站', 'https://m.runoob.com', 6];

connection.query(updateSql, updateParams, (err, result) => {
  if (err) {
    console.log('[UPDATE ERROR] - ', err.message);
    return;
  }
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows', result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
})

connection.end()