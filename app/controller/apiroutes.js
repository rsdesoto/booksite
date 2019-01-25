var connection = require("./connection.js");

module.exports = function(app) {
  app.get("/api/books", function(req, res) {
    connection.query("SELECT * FROM BOOKS", function(err, data) {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
  });

  app.get("/api/authors", function(req, res) {
    connection.query("SELECT * FROM AUTHORS", function(err, data) {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
  });

  app.get("/api/ratings", function(req, res) {
    connection.query("SELECT * FROM RATINGS", function(err, data) {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
  });

  app.get("/api/progress", function(req, res) {
    connection.query("SELECT * FROM PROGRESS", function(err, data) {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
  });

  app.get("/api/allbooks", function(req, res) {
    connection.query(
      "SELECT * FROM books LEFT JOIN progress ON books.id = progress.bookID LEFT JOIN ratings ON books.id = ratings.bookID LEFT JOIN authors ON books.authorID = authors.ID;",
      function(err, data) {
        if (err) throw err;
        console.log(data);
        res.json(data);
      }
    );
  });
};
