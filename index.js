function fetchBooks() {
  const apiUrl = 'https://anapioficeandfire.com/api/books';

  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
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

 
  console.log('The 5th book in the series:', books[4].name);

  const character1031 = books.reduce((acc, book) => acc.concat(book.characters), []);
  console.log('The 1031st character in the series:', character1031[1030]);

  const totalPages = books.reduce((acc, book) => acc + book.numberOfPages, 0);
  console.log('The total number of pages of all the books:', totalPages);
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
