import getBooks from './getBooks.js';
import Popup from './popup.js';

const bookGrid = document.querySelector('.book-grid');
bookGrid.innerHTML = '';

const displayBooks = async () => {
  try {
    const books = await getBooks();
    books.forEach((book) => {
      const thumbnail = document.createElement('img');
      thumbnail.classList.add('thumbnail');
      thumbnail.src = book.coverImageUrl;

      const bookTime = document.createElement('div');
      bookTime.classList.add('book-time');
      bookTime.textContent = book.publishYear;

      const thumbnailRow = document.createElement('div');
      thumbnailRow.classList.add('thumbnail-row');
      thumbnailRow.append(thumbnail, bookTime);

      const bookTitle = document.createElement('p');
      bookTitle.classList.add('book-title');
      bookTitle.textContent = book.title;

      const bookInfo = document.createElement('div');
      bookInfo.classList.add('book-info');
      bookInfo.append(bookTitle);

      const bookInfoGrid = document.createElement('div');
      bookInfoGrid.classList.add('book-info-grid');
      bookInfoGrid.append(bookInfo);

      const bookPreview = document.createElement('div');
      bookPreview.classList.add('book-preview');
      bookPreview.append(thumbnailRow, bookInfoGrid);

      const commentButton = document.createElement('button');
      commentButton.classList.add('comment-button');
      commentButton.textContent = 'Add Comment';
      commentButton.addEventListener('click', () => {
        // show comment popup for this book
        const popup = new Popup();
        popup.showPopup(book);
      });
      bookPreview.appendChild(commentButton);

      bookGrid.appendChild(bookPreview);
    });
  } catch (error) {
    bookGrid.innerHTML = `<p class="error-message">${error.message}</p>`;
  }
};

export default displayBooks;
