let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const container = document.getElementById("container");

let addBook = document.getElementById("add-book");
  addBook.addEventListener('click', formFunction)
  addBook.addEventListener("click", function(event){
    event.preventDefault()
  });

function formFunction(){
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.querySelector('input[name="read"]:checked').value;
  const book = new Book (title, author, pages, read);
  addBookToLibrary(book);
  cardDisplay(book);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function cardDisplay(book){
  let card = document.createElement("div");
      card.className="card";
      container.appendChild(card);
    let infoContainer = document.createElement("div")
      infoContainer.setAttribute('class', "info-container");
      card.appendChild(infoContainer);
    let title = document.createElement("div");
      title.setAttribute('class', "title");
      title.innerHTML = book.title;
      infoContainer.appendChild(title);
    let author = document.createElement("div");
      author.setAttribute('class', "author");
      author.innerHTML = "by " + book.author;
      infoContainer.appendChild(author);
    let pageAndStatus = document.createElement("div");
      pageAndStatus.setAttribute('class', 'page-and-status');
      card.appendChild(pageAndStatus)
    let pages = document.createElement("div");
      pages.innerHTML = book.pages; 
      pageAndStatus.appendChild(pages);
    let read = document.createElement("button");
      if (book.read = 1){
        read.innerHTML = "Read"
      }
      if (book.read = 2){
        read.innerHTML = "Unread"
      }; 
      read.addEventListener('click', changeStatus)
        function changeStatus(){
          book.read++;
          if (book.read % 2 === 0){
            console.log("unread")
            book.read = 2; 
            read.innerHTML = "Unread"
          }
          if (book.read % 2 != 0){
            console.log("read")
            book.read = 1;
            read.innerHTML = "Read";
          }
          console.log(book.read)
        }
      pageAndStatus.appendChild(read);
    let removeBookButton= document.createElement("button");
      let bookLocation = myLibrary.indexOf(book);
      removeBookButton.addEventListener('click', removeBookFromLibrary);
      removeBookButton.innerHTML="delete";
      pageAndStatus.appendChild(removeBookButton);

        function removeBookFromLibrary(){
          myLibrary.splice(bookLocation, 1);
          container.removeChild(card);
        }
}

function removeBookFromLibrary(){
  console.log(bookLocation);
}