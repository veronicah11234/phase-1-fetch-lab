// index.js

function fetchBooks() {
  const apiUrl = 'https://anapioficeandfire.com/api/books';

  // Fetch data from the API
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Call renderBooks() with the JSON-ified data
      renderBooks(data);
    })
    .catch(error => console.error('Error fetching books:', error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });

  // Your additional rendering logic goes here
  // For example, you can log the 5th book, the 1031st character, and the total number of pages

  // 5th book
  console.log('The 5th book in the series:', books[4].name);

  // 1031st character in the series
  const character1031 = books.reduce((acc, book) => acc.concat(book.characters), []);
  console.log('The 1031st character in the series:', character1031[1030]);

  // Total number of pages of all the books
  const totalPages = books.reduce((acc, book) => acc + book.numberOfPages, 0);
  console.log('The total number of pages of all the books:', totalPages);
}

// Call fetchBooks when index.html is loaded
document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
