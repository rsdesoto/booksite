$(".header-login").on("click", function(event) {
  event.preventDefault();
  alert("hi");
});

/**
 * On page load, query the databases and create cards for each book
 */
$(document).ready(() => {
  console.log("ready!");

  $.get("/api/allbooks", data => {
    console.log(data);
    data.map(item => {
      createNewCard(item);
      // console.log(item);
    });
  });
});

const testItem = {
  title: "Test Title",
  name: "Test Author",
  review:
    "I liked this book. Text goes here. Notes go here. I like lots of things. Hello world.",
  pages: 234,
  pagesRead: 121,
  dateUpdated: "2019/01/21",
  rating: 4
};

/**
 *
 * @param {object} item
 */
function createNewCard(item) {
  let newBookCard = $("<div>");
  newBookCard.addClass("bookcard");
  newBookCard.attr("value", item.bookID);

  const temp = item.dateUpdated + " ";

  const year = temp.substring(0, 4);
  const month = temp.substring(5, 7);
  const day = temp.substring(8, 10);

  console.log(year, month, day);

  // component creation ///////////////////////////////////////////////
  // create header
  let newBookHeader = $("<div>");
  newBookHeader.addClass("bookcard-header");

  // create title
  let newBookTitle = $("<div>");
  newBookTitle.addClass("bookcard-title");
  newBookTitle.html(`<h2>${item.title}</h2>`);

  // create author info
  let newBookInfo = $("<div>");
  newBookInfo.addClass("bookcard-info");
  newBookInfo.html(`<h3>${item.name}</h3>`);

  // create text info
  let newBookText = $("<div>");
  newBookText.addClass("bookcard-text");
  newBookText.html(`<p>${item.review}</p>`);

  // console.log(moment(item.dateUpdated).format("YYYY MM DD"));

  // create footer info
  let newBookFooter = $("<div>");
  newBookFooter.addClass("bookcard-footer");
  newBookFooter.html(`<p>pages read: ${item.pagesRead} out of ${item.pages}</p>
  <p>Status: ${item.bookstatus}</p>
  <p>Date updated: ${year}/${month}/${day}</p>     
  <p>current rating: ${item.rating}/5</p>`);

  // card creation ///////////////////////////////////////////////
  newBookHeader.append(newBookTitle);
  newBookHeader.append(newBookInfo);
  newBookCard.append(newBookHeader);
  newBookCard.append(newBookText);
  newBookCard.append(newBookFooter);

  // append card to the main content section
  $(".main-content").append(newBookCard);
}
