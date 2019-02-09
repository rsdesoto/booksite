const bookID = window.location.pathname.substring(13);

/**
 * Note from Ry - need to update to make these variables
 * global - want to make sure that the author ID
 * is always set so it's easier to update everything
 */
let authorID;

/**
 * On page load, query the databases and fill in all information
 */
$(document).ready(() => {
  console.log("ready!");
  console.log(bookID);

  $.get(`/api/onebook/${bookID}`, data => {
    // console.log(data);
    // console.log(data[0]);
    enterBookDetails(data[0]);
  });
});

/**
 * Gets the information entered in the update form and
 * creates the object sent into the database
 */
$("#update-button").on("click", event => {
  event.preventDefault();
  const updateInfo = {
    title: $("#update-title")
      .val()
      .trim(),
    name: $("#update-author")
      .val()
      .trim(),
    bookstatus: $("#update-status").val(),
    rating: $("#update-rating").val(),
    review: $("#update-review")
      .val()
      .trim(),
    pagesRead: $("#update-pages-read").val(),
    pages: $("#update-pages").val()
  };
  console.log(updateInfo);
  $.post("/api/onebook", updateInfo, data => {
    console.log("hi");
  });
  //   return false;
});

/**
 * this function updates each of the appropriate areas
 * of the details page
 * @param {object} book
 */
const enterBookDetails = book => {
  $("#jq-detail-title").html(book.title);
  $("#jq-detail-author").html(book.name);
  $("#jq-detail-status").html(book.bookstatus);
  $("#jq-detail-rating").html(book.rating);
  $("#jq-detail-review").html(book.review);
  $("#jq-detail-pages-read").html(book.pagesRead);
  $("#jq-detail-pages").html(book.pages);
  $("#jq-detail-update-date").html(book.dateUpdated);
};

/**
 * Hides/unhides the update section and preloads
 * all the information
 */
$("#test-button").on(
  "click",
  () => {
    //   if ($(".detail-update").css("display") === "none") {
    $(".detail-update").css("display", "block");
    console.log("Hello");
    $("#update-title").val($("#jq-detail-title")[0].textContent);
    $("#update-author").val($("#jq-detail-author")[0].textContent);
    $("#update-status").val($("#jq-detail-status")[0].textContent);
    $("#update-rating").val($("#jq-detail-rating")[0].textContent);
    $("#update-review").val($("#jq-detail-review")[0].textContent);
    $("#update-pages").val($("#jq-detail-pages")[0].textContent);
    $("#update-pages-read").val($("#jq-detail-pages-read")[0].textContent);
  }
  //   else {
  //     $(".detail-update").css("display", "none");
  //   }
);
