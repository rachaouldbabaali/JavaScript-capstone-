import './style.scss';
import img from './img/logo.png';
import Popup from './modules/popup.js';
import getBooks from './modules/viewBooks.js';

getBooks();

// add the logo to the navbar
const logo = document.createElement('img');
logo.src = img;
logo.alt = 'logo';
logo.classList.add('logoimg');
document.querySelector('.logo').appendChild(logo);

const button = document.querySelector('.showpopup');
// show popup when the button is clicked
button.addEventListener('click', () => {
    const popup = new Popup();
    popup.showCommentsPopup();
    }
);