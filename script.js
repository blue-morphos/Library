let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {
  myLibrary.push(book);
}

const container = document.getElementById("container");

document.querySelector('button').addEventListener("click", formFunction)
function formFunction(){
  let card = document.createElement("div");
    card.className = "card";
      container.appendChild(card);
  let title = document.createElement("div");
    title.id = "title";
      card.appendChild(title);
  let author =  document.createElement("div");
    author.id = "author";
      card.appendChild(author);
  const book = new Book (prompt("Title"), prompt("Author"), prompt("Pages"), prompt("Read?"))
  document.getElementById("title").innerHTML= book.title; 
  document.getElementById("author").innerHTML= book.author; 
}