/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-07 13:51:00
 * @LastEditors: heting
 * @LastEditTime: 2021-12-07 13:56:50
 */
const test_sql = require('./test_sql');

// 增
// test_sql.addUser(['yy', 15]).then(res => {
//   console.log(res)
// })

// 改
// test_sql.updateUser({ username: 'yu', id: 4 }).then(res => {
//   console.log(res)
// })

// 删
test_sql.deleteUser(4).then(res => {
  console.log(res);
})

// 查 
// test_sql.getUserList().then(res => {
//   console.log(res)
// })