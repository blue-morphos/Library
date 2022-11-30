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

document.querySelector('button').addEventListener("click", createForm)

function createForm(){
  let form = document.createElement("form");
    form.setAttribute('class', 'form')
    container.appendChild(form);
}
function formFunction(){
  const book = new Book (prompt("Title"), prompt("Author"), prompt("Pages"), prompt("Read?"));
  addBookToLibrary(book);
  cardDisplay();
  counter++;
}

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
    let pages = document.createElement("div");
      pages.innerHTML = myLibrary[i].pages; 
      card.appendChild(pages);
    let read = document.createElement("div");
      read.innerHTML = myLibrary[i].read; 
      card.appendChild(read);
  }
}


console.log(myLibrary);