
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

//create a storage for books objects in an array
let library = [];

//creat a function to add books
function addBook(event) {
    event.preventDefault(); //this prevents the default form submission behaviour to keep on flushing
    //Get values from inputs
    const title = titleInput.value;
    const author = authorInput.value;
    const genre = genreInput.value;
    const progress = progressInput.value;
//creating the book object
    const book = {
        title,
        author,
        genre,
        progress
    };
//push the book in the library, render it on the DOM and reset the form to appear blank ready to capture another book
    library.push(book);
    renderBooks();
    bookForm.reset();
}
// Function to render all books in the library
function renderBooks() {
    // Clear the existing book list
    bookList.innerHTML = '';
    // Iterate over each book in the library and Create a new list item element
    library.forEach(book => {
        const li = document.createElement('li');
        li.classList.add('book-item');
        // Populate the list item with book details
        li.innerHTML = `<strong>${book.title}</strong> by ${book.author} (${book.genre}) - Progress: ${book.progress}%`;
        // Append the list item to the book list
        bookList.appendChild(li);
    });
}
//function to filter books:
function filterBooks() {
    //convert the search term to lower case
    const searchTerm = searchInput.value.toLowerCase();
    //filter the library based on the searchterm lowercase 
    const filteredBooks = library.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.genre.toLowerCase().includes(searchTerm)
    );
    // render the filtered books 
    renderFilteredBooks(filteredBooks);
}

