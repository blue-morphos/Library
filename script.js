let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}
  
const book = new Book (prompt("Title"), prompt("Author"), prompt("Pages"), prompt("Read?"))

function addBookToLibrary() {
  myLibrary.push(book);
}



  document.getElementById("title").innerHTML= book.title; 
  document.getElementById("author").innerHTML= book.author; 

  const container = document.getElementById("container");

document.querySelector('button').addEventListener("click", formFunction)
function formFunction(){
  let card = document.createElement("div");
  card.className = "card";
  let title = document.createElement("title");
  let author =  document.createElement("author");
  card.appendChild(title);
  card.appendChild(author);
  const book = new Book (prompt("Title"), prompt("Author"), prompt("Pages"), prompt("Read?"))
  document.getElementById("title").innerHTML= book.title; 
  document.getElementById("author").innerHTML= book.author; 
}