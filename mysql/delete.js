/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-07 10:38:24
 * @LastEditors: heting
 * @LastEditTime: 2021-12-07 10:41:21
 */
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'ht'
});

connection.connect()

const deleteSql = 'DELETE FROM websites WHERE id = 6'

connection.query(deleteSql, (err, result) => {
  if (err) {
    console.log('[DELETE ERROR] - ', err.message);
    return;
  }

  console.log('--------------------------DELETE----------------------------');
  console.log('DELETE affectedRows', result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
})

connection.end()