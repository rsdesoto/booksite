
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


UPDATE books, authors, progress, ratings
SET authors.name = "jane test",
books.title = "test title",
progress.pages = 9999,
progress.pagesRead = 9999,
ratings.rating = 4,
ratings.review = "test review"
WHERE books.id = progress.bookID 
AND books.id = ratings.bookID
AND books.authorID = authors.ID
AND books.id = 1
;


