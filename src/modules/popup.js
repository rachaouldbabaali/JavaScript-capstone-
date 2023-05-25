// import the Popup class
import Popup from './popup.js';

// create a new instance of the Popup class for testing
const testPopup = new Popup(0);

// create a mock comment object for testing
const mockComment = {
  username: 'testUser',
  comment: 'This is a test comment',
};

// test the addComment function
describe('addComment', () => {
  test('should add a new comment to the comments list', () => {
    // add a mock comment to the comments list
    testPopup.addComment(0, mockComment.username, mockComment.comment);

    // get the comments list element
    const commentsList = testPopup.popup.querySelector('.popup__comments');

    // check if the new comment was added to the list
    expect(commentsList.children.length).toBe(1);
    expect(commentsList.children[0].textContent).toContain(mockComment.username);
    expect(commentsList.children[0].textContent).toContain(mockComment.comment);
  });
});

// test the comment counter
describe('comment counter', () => {
  test('should display the correct number of comments', () => {
    // get the comment counter element
    const commentCounter = testPopup.popup.querySelector('.comment-count');

    // check if the comment counter is correct
    expect(commentCounter.textContent).toContain('1');
  });
});
