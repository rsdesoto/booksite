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

INSERT INTO progress(pages,pagesRead,bookId)
VALUES
(500,230,1),
(150,121,2)
;

INSERT INTO ratings(rating,review,bookId)
VALUES
(5,"I really loved this -- both the perspective of the girl and the responses from the woman. I rarely enjoy when authors put themselves into their books, but this was an exception.",1),
(5,"Spooky and upsetting and surprisingly something of a love story? I like the whole series, but I think this is the strongest book.",2)
;


select * from books;