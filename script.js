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

document.getElementById('new-book-button').addEventListener("click", createForm);

function createForm(){
  let form = document.createElement("form");
    form.setAttribute('class', 'form')
    container.appendChild(form);
  let titleName = document.createElement("input");
    titleName.setAttribute('id', 'title');
    titleName.setAttribute('type', 'text');
    titleName.setAttribute('value', 'Title');
    form.appendChild(titleName);
  let authorName = document.createElement("input"); 
    authorName.setAttribute('id', 'author');
    authorName.setAttribute('type', 'text');
    authorName.setAttribute('value', 'Author');
    form.appendChild(authorName);
  let submitButton = document.createElement("input");
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');
    submitButton.setAttribute('class', 'submitButton');
    form.appendChild(submitButton);
    submitButton.addEventListener('click', formFunction)
    submitButton.addEventListener("click", function(event){
      event.preventDefault()
    });
}

function formFunction(){
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  const book = new Book (title, author);
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