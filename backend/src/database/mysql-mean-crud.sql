create database mysql_mean_crud;

use mysql_mean_crud;

create table employees(
	id INT NOT NULL AUTO_INCREMENT,
	fullname VARCHAR(60) NOT NULL,
	office VARCHAR(80) NOT NULL,
    position VARCHAR(80) NOT NULL,
	salary INT NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO employees(fullname,office,position,salary) VALUES ("Manuel Moreno","Bogotá","JR backend dev",10000);
INSERT INTO employees(fullname,office,position,salary) VALUES ("Hannah Rosa","Roma","SR backend dev",40000);
INSERT INTO employees(fullname,office,position,salary) VALUES ("Homero Vegazo","Santo Domingo","Contador",50000);


SELECT * FROM employees;