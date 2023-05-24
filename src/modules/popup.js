// create a popup window for comments and add it to the DOM tree
import getBooks from './getBooks.js';

export default class Popup {
  constructor() {
    this.popup = document.createElement('div');
    this.popup.classList.add('popup');
    this.popup.innerHTML = `
        <div class="popup__content">
            <div class="popup__header">
            <h3 class="popup__title"></h3>
            <button class="popup__close">&times;</button>
            </div>
            <div class="popup__body">
            <img class="popup__cover-image" src="" alt="">
            <p class="popup__publish-year"></p>
            <p class="popup__description"></p>
            <h4 class="popup__comments-title">Comments</h4>
            <ul class="popup__comments"></ul>
            <div class="popup__new-comment">
                <input type="text" class="popup__new-comment-username" placeholder="Your name">
                <textarea class="popup__new-comment-textarea" placeholder="Add a comment..."></textarea>
                <button class="popup__new-comment-button">Comment</button>
            </div>
            </div>
        </div>
        `;
    this.titleElement = this.popup.querySelector('.popup__title');
    this.coverImageElement = this.popup.querySelector('.popup__cover-image');
    this.commentsList = this.popup.querySelector('.popup__comments');
    this.popup.querySelector('.popup__close').addEventListener('click', () => {
      this.closeCommentsPopup();
    });
    this.popup.querySelector('.popup__new-comment-button').addEventListener('click', () => {
      this.addComment();
    });
  }

  // show the popup for a specific book
    showPopup(book) {
    this.titleElement.textContent = book.title;
    this.coverImageElement.src = book.coverImageUrl;
    this.coverImageElement.alt = book.title;
    this.popup.querySelector('.popup__publish-year').textContent = book.publishYear;
    this.popup.querySelector('.popup__description').textContent = book.description;
    this.showCommentsPopup();
    }

  // show the popup
  showCommentsPopup() {
    // get comments from the server
    const itemCommentsUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fbs2iyi2bEqolrs1GvfW/comments?item_id=item1';
    fetch(itemCommentsUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach((element) => {
          const commentElement = document.createElement('li');
          commentElement.classList.add('popup__comment');
          commentElement.innerHTML = `${element.creation_date} <span>${element.username}</span>: ${element.comment}`;
          this.popup.querySelector('.popup__comments').appendChild(commentElement);
        });
      });
    document.body.appendChild(this.popup);
  }

  // close the popup
  closeCommentsPopup() {
    this.popup.remove();
  }

  // add a comment to the popup with username that swhod be entered by the user
    addComment() {
    const comment = document.querySelector('.popup__new-comment-textarea').value;
    const username = document.querySelector('.popup__new-comment-username').value;
    const commentElement = document.createElement('li');
    commentElement.classList.add('popup__comment');
    commentElement.innerHTML = `<span>${username}</span>: ${comment}`;
    this.popup.querySelector('.popup__comments').appendChild(commentElement);
    document.querySelector('.popup__new-comment-textarea').value = '';
    document.querySelector('.popup__new-comment-username').value = '';

    }

}