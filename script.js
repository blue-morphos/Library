let myLibrary = [];
let counter = 0;

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
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
  counter++;
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
    let read = document.createElement("div");
      read.innerHTML = book.read; 
      pageAndStatus.appendChild(read);
}

myLibrary.forEach(book => {
  cardDisplay(book)
});
/*
function cardDisplay(){
  for (i = counter; i < myLibrary.length; i++){
    let card = document.createElement("div");
      card.className="card";
      container.appendChild(card);
    let infoContainer = document.createElement("div")
      infoContainer.setAttribute('class', "info-container");
      card.appendChild(infoContainer);
    let title = document.createElement("div");
      title.setAttribute('class', "title");
      title.innerHTML = myLibrary[i].title;
      infoContainer.appendChild(title);
    let author = document.createElement("div");
      author.setAttribute('class', "author");
      author.innerHTML = "by " + myLibrary[i].author;
      infoContainer.appendChild(author);
    let pageAndStatus = document.createElement("div");
      pageAndStatus.setAttribute('class', 'page-and-status');
      card.appendChild(pageAndStatus)
    let pages = document.createElement("div");
      pages.innerHTML = myLibrary[i].pages; 
      pageAndStatus.appendChild(pages);
    let read = document.createElement("div");
      read.innerHTML = myLibrary[i].read; 
      pageAndStatus.appendChild(read);
  }
}
*/