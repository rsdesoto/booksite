


SELECT * FROM books 
LEFT JOIN progress ON books.id = progress.bookID
LEFT JOIN ratings ON books.id = ratings.bookID
LEFT JOIN authors ON books.authorID = authors.ID;