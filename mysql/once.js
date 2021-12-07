/*
 * @Descripttion: 
 * @version: 
 * @Author: heting
 * @Date: 2021-12-07 11:05:57
 * @LastEditors: heting
 * @LastEditTime: 2021-12-07 11:48:49
 */
const mysql = require('mysql')
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'ht'
})

db.connect()

// let createTableSql = `drop table if exists 'user';create table 'user'('id' int primary key auto_increment,'username' chat(20) not null default '' comment '用户名','age' int not null default 0 comment '年龄')`

let delExistTable = `drop table if exists user;`
let createTableSql = `create table user(
  id int(10) primary key auto_increment, 
  username varchar(255)not null default '' comment '用户名',
  age int(3) not null default 0 comment '年龄'
)`

// let createTableSql = `create table if not exists todos(
//   id int primary key auto_increment,
//   title varchar(255)not null,
//   completed tinyint(1) not null default 0
// )`
let sql = `select * from user`
// let sql = `insert into user set username='ht', age=18`
// let sql = `insert into user(username, age) values('ht', 13)`
// let sql = `insert into user values(0, 'lwy', 12)`
// let sql = `update user set username='clj' where id=1`
// let sql = `delete from user where id=2`
// let sql = `delete from user where id=2 and age=12`
// let sql = `delete from user where id=2 or age=12`

// let delDataBase = `drop table user`

db.query(sql, (err, result) => {
  if (err) throw err;
  console.log(result)
  dbClose()
})

function dbClose () {
  db.end()
}