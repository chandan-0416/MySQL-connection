#  Node.js + MySQL ---> CRUD Operation

1. 
- npm init -y
- npm i express (version 5)
- npm i mysql2 (Version 3)
- node.js (already intall)

2. Package.js
- removed commonjs type
- add module type (we used ECMA )

3. Connection Steps: MySQL and Node.js
- step 1: to connect to mysql server
- step 2: we need to create a db
- step 3: then we  to create a table
- step 4: is to perform CRUD Operation

4. CRUD Operation (INSERT, READ, UPDATE, DELETE)
- In case of Insert
a. Using Inline Values (Not Recommended)
b. Using Prepared Statements (Best Practice) 

5. Important Note
- execute method return array => [rows,field] 
- in case of insert  a. execute method , b. query method for insefrt multiple values

