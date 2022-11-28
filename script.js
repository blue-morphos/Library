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

document.querySelector('button').addEventListener("click", formFunction)

function formFunction(){
  const book = new Book (prompt("Title"), prompt("Author"), prompt("Pages"), prompt("Read?"));
  addBookToLibrary(book);
  console.log(myLibrary);
  cardDisplay();
  counter++;
}

function cardDisplay(){
  for (i = counter; i < myLibrary.length; i++){
    let card = document.createElement("div");
      card.className="card";
      container.appendChild(card);
    let title = document.createElement("div");
      title.classname = "title";
      title.innerHTML = myLibrary[i].title;
      card.appendChild(title);
    let author = document.createElement("div");
      author.classname = "author";
      author.innerHTML = myLibrary[i].author;
      card.appendChild(author);
    let pages = document.createElement("div");
      pages.classname = "pages";
      pages.innerHTML = myLibrary[i].pages; 
      card.appendChild(pages);
    let read = document.createElement("div");
      read.classname = "pages";
      read.innerHTML = myLibrary[i].pages; 
      card.appendChild(read);
  }
}


console.log(myLibrary);