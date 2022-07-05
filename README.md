# abian-with-sql

In Xampp:
i. At first create the database in xampp and name the databse "abian"
ii. Then create a table with the below query
```
create table users (
    id int primary key AUTO_INCREMENT,
    username varchar(250),
    email varchar(250),
    password varchar(250),
    fullname varchar(250),
    created_at varchar(250),
    member_type varchar(250),
    phone varchar(14),
    donation_list varchar(250)
)
```
With Github:
Create a github account to be a contributor own or to others.

With NodeJS:
i. Install Visual Studio Code, NodeJS, Git
ii. Run the command on terminal.
```
git clone https://github.com/musiur/abian-with-sql.git
```
iii. Open the folder abian-with-sql
iv. Open terminal and run the command
```
npm install
```
This will install all of the packages need for the backend
v. Again in terminal run the command
```
npm run dev
```
