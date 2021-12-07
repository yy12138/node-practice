/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-07 13:45:36
 * @LastEditors: heting
 * @LastEditTime: 2021-12-07 13:56:06
 */
const { query } = require('./mysql.js')

exports.getUserList = options => {
  let sql = `select * from user`;
  return query(sql)
}

exports.addUser = options => {
  let sql = `insert into user(id,username,age) values(0,?,?)`;
  return query(sql, options);
}

exports.updateUser = options => {
  let sql = `update user set username='${options.username}' where id=${options.id}`;
  return query(sql)
}

exports.deleteUser = id => {
  let sql = `delete from user where id=${id}`;
  return query(sql)
}