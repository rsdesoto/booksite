
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

-- status options: 
-- to read / reading / finished / dnf

INSERT INTO progress(pages,bookstatus,pagesRead,bookId)
VALUES
(500,"finished",230,1),
(150,"finished",121,2)
;

INSERT INTO ratings(rating,review,bookId)
VALUES
(5,"I really loved this -- both the perspective of the girl and the responses from the woman. I rarely enjoy when authors put themselves into their books, but this was an exception.",1),
(5,"Spooky and upsetting and surprisingly something of a love story? I like the whole series, but I think this is the strongest book.",2)
;


select * from books;