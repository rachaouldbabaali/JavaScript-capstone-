import getBooks from './getBooks.js';
import getLikes from './getLikes.js';
import postLikes from './postLikes.js';

const bookGrid = document.querySelector('.book-grid');
bookGrid.innerHTML = '';

const display = async () => {
  try {
    const books = await getBooks();
    const getTheLikes = await getLikes();
    books.forEach((book, index) => {
      const id = getTheLikes.findIndex((like) => +like.item_id === index);
      const likes = id >= 0 ? getTheLikes[id].likes : 0;

      const thumbnail = document.createElement('img');
      thumbnail.classList.add('thumbnail');
      thumbnail.src = book.coverImageUrl;

      const bookTime = document.createElement('div');
      bookTime.classList.add('book-time');
      bookTime.textContent = `Published in: ${book.publishYear}`;

      const thumbnailRow = document.createElement('div');
      thumbnailRow.classList.add('thumbnail-row');
      thumbnailRow.append(thumbnail, bookTime);

      const bookTitle = document.createElement('p');
      bookTitle.classList.add('book-title');
      bookTitle.textContent = book.title;

      const bookLike = document.createElement('p');
      bookLike.classList.add('book-like');
      bookLike.addEventListener('click', () => {
        if (postLikes(id)) bookLike.textContent = `❤ ${likes + 1} Likes`;
      });
      bookLike.textContent = `❤ ${likes} Likes`;

      const bookInfo = document.createElement('div');
      bookInfo.classList.add('book-info');
      bookInfo.append(bookTitle, bookLike);

      const bookInfoGrid = document.createElement('div');
      bookInfoGrid.classList.add('book-info-grid');
      bookInfoGrid.append(bookInfo);

      const bookPreview = document.createElement('div');
      bookPreview.classList.add('book-preview');
      bookPreview.append(thumbnailRow, bookInfoGrid);

      bookGrid.appendChild(bookPreview);
    });
  } catch (error) {
    bookGrid.innerHTML = `<p class="error-message">${error.message}</p>`;
  }
};

export default display;
