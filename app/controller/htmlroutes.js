const path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../view/html/index.html"));
  });

  app.get("/books", function(req, res) {
    res.sendFile(path.join(__dirname, "/../view/html/books.html"));
  });
  app.get("/bookdetails/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "/../view/html/bookdetails.html"));
  });

  app.get("/newbook", function(req, res) {
    res.sendFile(path.join(__dirname, "/../view/html/newbook.html"));
  });
};
