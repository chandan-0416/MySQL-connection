import mysql from "mysql2/promise.js";

//? 1. to connect to mysql server
const db = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"4269",
    database:"mysql_crud_db",
})

console.log("MySQL Connection Successfully");

//? 2. we need to create a db
// await db.execute(`create database mysql_crud_db`);
// console.log(await db.execute("show databases"));

//? 3. then we  to create a table
// await db.execute(`
//     create table users(
//     id int auto_increment primary key,
//     username varchar(100) not null,
//     email varchar(100) not null unique
//     );
//     `);

//? 4. is to perform CRUD Operation
//! Insert

//* Using Inline Values (Not Recommended)
// await db.execute(`
//     insert into users(username, email) values('chandan','chandan16@gmail.com')
//     `);

//* Using Prepared Statements (Best Practice)
// await db.execute(`
//     insert into users(username, email) values(?,?)  
//     `, ["sintu", "situ16@gmail.com"]);

//* Multiple Values Insert (Array of an Array) -> use query

// const values = [
//     ["abc1", "abc1@gmail.com"],
//     ["abc2", "abc2@gmail.com"],
//     ["abc3", "abc3@gmail.com"],
//     ["abc4", "abc4@gmail.com"],
//     ["abc5", "abc5@gmail.com"],
// ]
// await db.query("insert into users(username, email) values ?", [values]);

//! Read
// const [rows] = await db.execute(`select * from users`);
// const [rows] = await db.execute(`select * from users where username="chandan"`)
// console.log(rows);


//! Update
//? Syntax
//update table_name
// SET column1 = value1, column = value2, ...
// WHARE condition

// try {
// const [rows] = await db.execute( 
//     " update users SET username = 'chandan Kushwaha' where email='chandan16@gmail.com'"
// );
// console.log("All Users:", rows);
// } catch (error) {
// console.log(error);
// }

//2. recommended way
// try {
// const [rows] = await db.execute( 
//     " update users SET username = ? where email= ?",
//     ["Chandan Kushwaha", "situ16@gmail.com"]
// );
// console.log("All Users:", rows);
// } catch (error) {
// console.log(error);
// }

//! Delete
//? Syntax
// DELETE FROM table_name
// WHERE condition;

// try {
// const [rows] = await db.execute( 
//     "DELETE FROM users where email='chandan16@gmail.com'"
// );
// console.log("All Users:", rows);
// } catch (error) {
// console.log(error);
// }

//2. Recommended way
// try {
// const [rows] = await db.execute( 
//     "DELETE FROM users where email= ? ",
//     ["situ16@gmail.com"]
// );
// console.log("All Users:", rows);
// } catch (error) {
// console.log(error);
// }