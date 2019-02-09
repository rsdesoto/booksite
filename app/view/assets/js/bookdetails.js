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
  console.log(book.bookstatus);
  console.log(book.rating);
  console.log(book.review);
  console.log(book.pages);
  console.log(book.pagesRead);
  console.log(book.dateUpdated);
  $("#jq-detail-title").html(book.title);
  $("#jq-detail-author").html(book.name);
  $("#jq-detail-status").html(book.bookstatus);
  $("#jq-detail-rating").html(book.rating);
  $("#jq-detail-review").html(book.review);
  $("#jq-detail-pages-read").html(book.pagesRead);
  $("#jq-detail-pages").html(book.pages);
  $("#jq-detail-update-date").html(book.dateUpdated);
};

$("#test-button").on("click", () => {
  console.log("Hello");
  //   const temp = $("#jq-detail-title")[0].textContent;
  //   console.log(temp);
  $("#update-title").val($("#jq-detail-title")[0].textContent);
  $("#update-author").val($("#jq-detail-author")[0].textContent);
  $("#update-status").val($("#jq-detail-status")[0].textContent);
  $("#update-rating").val($("#jq-detail-rating")[0].textContent);
  $("#update-review").val($("#jq-detail-review")[0].textContent);
  $("#update-pages").val($("#jq-detail-pages")[0].textContent);
  $("#update-pages-read").val($("#jq-detail-pages-read")[0].textContent);
});
