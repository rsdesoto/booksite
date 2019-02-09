const bookID = window.location.pathname.substring(13);

/**
 * On page load, query the databases and fill in all information
 */
$(document).ready(() => {
  console.log("ready!");
  console.log(window.location.pathname);
  console.log(bookID);

  $.get(`/api/onebook/${bookID}`, data => {
    console.log(data);
    console.log(data[0]);
    enterBookDetails(data[0]);
    //   data.map(item => {
    //     createNewCard(item);
    //     // console.log(item);
    //   });
  });
});

const enterBookDetails = book => {
  console.log(book.name);
  console.log(book.title);
};
