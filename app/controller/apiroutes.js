var connection = require("./connection.js");

module.exports = function(app) {
  app.get("/api/books", function(req, res) {
    connection.query("SELECT * FROM BOOKS", function(err, data) {
      if (err) throw err;
      // console.log(data);
      res.json(data);
    });
  });

  app.get("/api/authors", function(req, res) {
    connection.query("SELECT * FROM AUTHORS", function(err, data) {
      if (err) throw err;
      // console.log(data);
      res.json(data);
    });
  });

  app.get("/api/ratings", function(req, res) {
    connection.query("SELECT * FROM RATINGS", function(err, data) {
      if (err) throw err;
      // console.log(data);
      res.json(data);
    });
  });

  app.get("/api/progress", function(req, res) {
    connection.query("SELECT * FROM PROGRESS", function(err, data) {
      if (err) throw err;
      // console.log(data);
      res.json(data);
    });
  });

  app.get("/api/allbooks", function(req, res) {
    connection.query(
      "SELECT * FROM books LEFT JOIN progress ON books.id = progress.bookID LEFT JOIN ratings ON books.id = ratings.bookID LEFT JOIN authors ON books.authorID = authors.ID;",
      function(err, data) {
        if (err) throw err;
        // console.log(data);
        res.json(data);
      }
    );
  });

  app.get("/api/onebook/:id", function(req, res) {
    console.log(req.params);
    connection.query(
      `SELECT * FROM books LEFT JOIN progress ON books.id = progress.bookID LEFT JOIN ratings ON books.id = ratings.bookID LEFT JOIN authors ON books.authorID = authors.ID WHERE books.id = ${
        req.params.id
      };`,
      function(err, data) {
        if (err) throw err;
        // console.log(data);
        res.json(data);
      }
    );
  });

  app.post("/api/onebook", function(req, res) {
    console.log("req body", req.body);
    // console.log("req params", req.params);
    // console.log(req);
    //
    //     `UPDATE books, authors, progress, ratings
    // SET authors.name = "${req.body.name}",
    // books.title = "${req.body.title}",
    // progress.pages = ${req.body.pages},
    // progress.pagesRead = ${req.body.pagesRead},
    // ratings.rating = ${req.body.rating},
    // ratings.review = "${req.body.review}"
    // WHERE books.id = progress.bookID
    // AND books.id = ratings.bookID
    // AND books.authorID = authors.ID
    // AND books.id = ${req.body.id}
    // ;`;

    connection.query(
      `UPDATE books, authors, progress, ratings SET authors.name = "${
        req.body.name
      }", books.title = "${req.body.title}", progress.pages = ${
        req.body.pages
      }, progress.pagesRead = ${req.body.pagesRead}, ratings.rating = ${
        req.body.rating
      }, ratings.review = "${
        req.body.review
      }" WHERE books.id = progress.bookID AND books.id = ratings.bookID AND books.authorID = authors.ID AND books.id = ${
        req.body.id
      };`,
      function(err, data) {
        if (err) throw err;
        // console.log(data);
        res.json(data);
      }
    );
  });
};
