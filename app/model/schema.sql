drop database if exists bookapp_db ;

create database bookapp_db;

use bookapp_db;

create table books(
id INTEGER(11) NOT NULL AUTO_INCREMENT,
title VARCHAR(50),
authorID VARCHAR(100),
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

create table progress(
id INTEGER(11) NOT NULL AUTO_INCREMENT,
pages INTEGER(11),
bookstatus VARCHAR(50) NOT NULL DEFAULT "to read",
pagesRead INTEGER(11),
dateStarted DATETIME DEFAULT CURRENT_TIMESTAMP,
dateFinished DATETIME,
dateUpdated DATETIME ON UPDATE CURRENT_TIMESTAMP,
bookId INTEGER(11),
PRIMARY KEY (id)
);

create table ratings(
id INTEGER(11) NOT NULL AUTO_INCREMENT,
rating INTEGER(11),
review TEXT(40000),
bookID INTEGER(11),
PRIMARY KEY (id)
);

create table authors(
id INTEGER(11) NOT NULL AUTO_INCREMENT,
name VARCHAR(50),
keywords VARCHAR(250),
PRIMARY KEY (id)
);
