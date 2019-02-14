# booksite

A personal place to log books I have read.

This represents the first iteration of the site -- created using Express.js, mySQL, and jQuery.

## How to use

Step 0: make sure you have Node.js and mySQL on your computer!

Step 1: clone the repository. Run "npm i" to install all packages.

Step 2: copy the files in "app > migrations > schema.sql" in mySQL to create the necessary tables

Step 3: update "app > controller > connection.js" to reflect your mySQL database settings. Update the port in server.js to reflect your personal port settings.

Step 4: run the server with node or nodemon

Step 5: go to your localhost. Navigate to the "new book" section. Add book information.

Step 6: using the nav bar, go to the "book list" section. Each book you add will be featured here. Click on a title to go to the book details page.

Step 7: as you read, you can update each book item using the "toggle update form" toggle. This provides a pre-populated update form to add information about the book.

## Technologies

- html/css
- jQuery
- flexbox

- node.js
- express
- mySQL

## Features to implement

- login/user verification - I want the book information to be available to the public, but updates/adding new information only available to me
- different views - ideally I would like the book page to be set up so you can see only unread books, or only finished books, or etc
- author search - only include books by certain authors, etc
- library API - include a CPL search

## TDL

- login functionality/login specifics
- verification (express-verification)
- set up migration

done:

- create/format cards
- book submit
- book update
- some data verification so you can apply books to an existing author?
- nav

## Future plans:

- switch to react
  - set up server-side rendering
- switch to django/flask
