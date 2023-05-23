// create a popup window for comments and add it to the DOM tree
export default class Popup {
  constructor() {
    this.popup = document.createElement('div');
    this.popup.classList.add('popup');
    this.popup.innerHTML = `
        <div class="popup__content">
            <div class="popup__header">
            <h3 class="popup__title">Comments</h3>
            <button class="popup__close">&times;</button>
            </div>
            <div class="popup__body">
            <ul class="popup__comments"></ul>
            <div class="popup__new-comment">
                <textarea class="popup__new-comment-textarea" placeholder="Add a comment..."></textarea>
                <button class="popup__new-comment-button">Comment</button>
            </div>
            </div>
        </div>
        `;
    this.popup.querySelector('.popup__close').addEventListener('click', () => {
      this.closeCommentsPopup();
    });
    this.popup.querySelector('.popup__new-comment-button').addEventListener('click', () => {
      this.addComment();
    });
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
          commentElement.textContent = element.comment;
          this.popup.querySelector('.popup__comments').appendChild(commentElement);
        });
      });
    document.body.appendChild(this.popup);
  }

  // close the popup
  closeCommentsPopup() {
    this.popup.remove();
  }

  // add a comment to the popup
  addComment() {
    const comment = this.popup.querySelector('.popup__new-comment-textarea').value;
    if (comment) {
      const commentElement = document.createElement('li');
      commentElement.classList.add('popup__comment');
      commentElement.textContent = comment;
      this.popup.querySelector('.popup__comments').appendChild(commentElement);
      this.popup.querySelector('.popup__new-comment-textarea').value = '';
    }
  }
}