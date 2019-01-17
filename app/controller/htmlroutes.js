const path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../view/html/index.html"));
  });

  app.get("/books", function(req, res) {
    res.sendFile(path.join(__dirname, "/../view/html/books.html"));
  });
};
