let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.inform = function info() {
      return information = (title + " by " + author + ", " + pages + " pages. Read: " + read);
    };
  }
}
  
const book = new Book (prompt("Title"), prompt("Author"), prompt("Pages"), prompt("Read?"))
myLibrary.push(book);

console.log(myLibrary);


let info = book.title  + " by " + book.author + ", " + book.pages + " pages. Read: " + book.read;
document.getElementById("card").innerHTML= info 