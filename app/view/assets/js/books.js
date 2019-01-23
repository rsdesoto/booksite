$(".header-login").on("click", function(event) {
  event.preventDefault();
  alert("hi");
});

/**
 * On page load, query the databases and create cards for each book
 */
$(document).ready(() => {
  console.log("ready!");

  $.get("/api/books", data => {
    console.log(data);
    data.map(item => {
      // createNewCard(item);
      console.log(item);
    });
  });
});

const testItem = {
  title: "Test Title",
  author: "Test Author",
  review:
    "I liked this book. Text goes here. Notes go here. I like lots of things. Hello world."
};

/**
 *
 * @param {object} item
 */
function createNewCard(item) {
  let newBookCard = $("<div>");
  newBookCard.addClass("bookcard");

  // component creation ///////////////////////////////////////////////
  // create header
  let newBookHeader = $("<div>");
  newBookHeader.addClass("bookcard-header");

  // create title
  let newBookTitle = $("<div>");
  newBookTitle.addClass("bookcard-title");

  // add title
  newBookTitle.html(`<h2>${item.title}</h2>`);

  // create author info
  let newBookInfo = $("<div>");
  newBookInfo.addClass("bookcard-info");

  // add author
  newBookInfo.html(`<h3>${item.author}</h3>`);

  // card creation ///////////////////////////////////////////////
  newBookHeader.append(newBookTitle);
  newBookHeader.append(newBookInfo);
  newBookCard.append(newBookHeader);

  // append card to the main content section
  $(".main-content").append(newBookCard);

  // return (
  //     <div class="bookcard">
  //       <div class="bookcard-header">
  //         <div class="bookcard-title">
  //           <h2>Book Title</h2>
  //         </div>
  //         <div class="bookcard-info">
  //           <h3>Book Author</h3>
  //         </div>
  //       </div>
  //       <div class="bookcard-text">
  //         <p>
  //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eum
  //           dolore voluptas tempora sint placeat rem, praesentium dicta
  //           tempore totam ex minus ipsum doloribus? Fugit similique dicta
  //           porro magni debitis! Lorem ipsum dolor sit amet consectetur
  //           adipisicing elit. Nostrum mollitia ipsa magnam eveniet distinctio
  //           praesentium omnis aspernatur inventore recusandae tempora deleniti
  //           adipisci quam hic, ea corrupti maiores aut, a quibusdam?
  //         </p>
  //       </div>
  //       <div class="bookcard-footer">
  //         <p>pages read: 17 out of 234</p>
  //         <p>Date updated: 1/21/2019</p>
  //         <p>current rating: 4/5</p>
  //       </div>
  //     </div>
  //   );
}

createNewCard(testItem);
