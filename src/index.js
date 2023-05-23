import './style.scss';
import img from './img/logo.png';
import Popup from './modules/popup.js';
// add the logo to the navbar
const logo = document.createElement('img');
logo.src = img;
logo.alt = 'logo';
logo.classList.add('logoimg');
document.querySelector('.logo').appendChild(logo);

// Get a reference to the "Comments" button
const commentsButton = document.getElementById('comments-button');

// show popup when "Comments" button is clicked
commentsButton.addEventListener('click', () => {
  const popup1 = new Popup();
  popup1.showCommentsPopup();
});
