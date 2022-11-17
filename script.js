let myLibrary = [];

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
  displayBook(book);
}

myLibrary.forEach(displayBook);
let i = 0;
function displayBook(){
  let card = document.createElement("div");
    card.className = "card";
      container.appendChild(card);
  let title = document.createElement("div");
    title.id = "title";
      card.appendChild(title);
  let author =  document.createElement("div");
    author.id = "author";
      card.appendChild(author);
  document.getElementById("title").innerHTML= myLibrary[i].title; 
  document.getElementById("author").innerHTML= myLibrary[i].author;
  i++; 
}

