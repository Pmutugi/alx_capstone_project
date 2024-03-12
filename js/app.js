
//Get references for the DOM elemets and assigning them to variables
const bookForm = document.getElementById('book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const genreInput = document.getElementById('genre');
const progressInput = document.getElementById('progress');
const bookList = document.getElementById('book-list');
const searchInput = document.getElementById('search');

//add event listeners to hand book submission  and filtering options
bookForm.addEventListener('submit', addBook);
searchInput.addEventListener('input', filterBooks);

let library = [];

function addBook(event) {
    event.preventDefault();
    const title = titleInput.value;
    const author = authorInput.value;
    const genre = genreInput.value;
    const progress = progressInput.value;

    const book = {
        title,
        author,
        genre,
        progress
    };

    library.push(book);
    renderBooks();
    bookForm.reset();
}

function renderBooks() {
    bookList.innerHTML = '';
    library.forEach(book => {
        const li = document.createElement('li');
        li.classList.add('book-item');
        li.innerHTML = `<strong>${book.title}</strong> by ${book.author} (${book.genre}) - Progress: ${book.progress}%`;
        bookList.appendChild(li);
    });
}

function filterBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = library.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.genre.toLowerCase().includes(searchTerm)
    );
    renderFilteredBooks(filteredBooks);
}

function renderFilteredBooks(books) {
    bookList.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        li.classList.add('book-item');
        li.innerHTML = `<strong>${book.title}</strong> by ${book.author} (${book.genre}) - Progress: ${book.progress}%`;
        bookList.appendChild(li);
    });
}
//  Set data in local storage
localStorage.setItem('key', 'value');

// Retrieve data from local storage
var retrievedData = localStorage.getItem('key');
console.log(retrievedData); // Output: 'value'
