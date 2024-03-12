
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
