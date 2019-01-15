-- for testing the setup of this app

INSERT INTO authors (name,keywords)
VALUES
("ruth ozeki",""),
("jeff vandermeer","");

 INSERT INTO books (title,authorID) 
VALUES
("a tale for the time being",1),
("annihilation",2)
;

select * from books;