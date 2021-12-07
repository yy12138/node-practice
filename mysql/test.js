/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-06 17:45:08
 * @LastEditors: heting
 * @LastEditTime: 2021-12-07 10:25:20
 */
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'ht'
})

connection.connect()

// connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
//   if (error) throw error;
//   console.log('the solution is:', results[0].solution)
// })

const sql = 'SELECT * FROM websites';
connection.query(sql, (err, result) => {
  if (err) {
    console.log('[select error] - ', err.message)
    return
  }

  console.log('--------------------------SELECT----------------------------');
  console.log(result);
  console.log('------------------------------------------------------------\n\n');
})

connection.end()