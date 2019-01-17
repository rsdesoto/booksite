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
};

// for api routes - for new book need
// to do both new book AND new author query
