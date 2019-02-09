
use bookapp_db;

SELECT * FROM books 
LEFT JOIN progress ON books.id = progress.bookID
LEFT JOIN ratings ON books.id = ratings.bookID
LEFT JOIN authors ON books.authorID = authors.ID;


SELECT * FROM books 
LEFT JOIN progress ON books.id = progress.bookID 
LEFT JOIN ratings ON books.id = ratings.bookID 
LEFT JOIN authors ON books.authorID = authors.ID 
WHERE books.id = "1"
;


UPDATE books
SET title = "a Tale for the time being"
WHERE books.id = 1;
