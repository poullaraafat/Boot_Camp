// Book array to store book objects
let books = [];
let editIndex = null;

// Select HTML elements
const bookForm = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const yearInput = document.getElementById("year");
const genreInput = document.getElementById("genre");
const bookList = document.getElementById("bookList");
const updateButton = document.getElementById("updateButton");

// Function to display books
function displayBooks() {
  bookList.innerHTML = "";
  books.forEach((book, index) => {
    const bookItem = document.createElement("li");
    bookItem.classList.add("book-item");
    bookItem.innerHTML = `
      <strong>${book.title}</strong> by ${book.author} (${book.year}) - ${book.genre}
      <div>
        <button onclick="editBook(${index})">Edit</button>
        <button onclick="deleteBook(${index})">Delete</button>
      </div>
    `;
    bookList.appendChild(bookItem);
  });
}

// Function to add or update a book
function addBook(event) {
  event.preventDefault();
  
  const book = {
    title: titleInput.value,
    author: authorInput.value,
    year: parseInt(yearInput.value),
    genre: genreInput.value,
  };

  if (editIndex !== null) {
    books[editIndex] = book;
    editIndex = null;
    updateButton.style.display = "none";
  } else {
    books.push(book);
  }

  bookForm.reset();
  displayBooks();
}

// Function to edit a book
function editBook(index) {
  const book = books[index];
  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;
  editIndex = index;
  updateButton.style.display = "inline";
}

// Function to delete a book
function deleteBook(index) {
  books.splice(index, 1);
  displayBooks();
}

// Event listeners
bookForm.addEventListener("submit", addBook);
updateButton.addEventListener("click", addBook);
