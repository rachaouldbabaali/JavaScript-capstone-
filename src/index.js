import './style.scss';
import img from './img/logo.png';

// add image as a logo in the navbar
const logo = document.createElement('img');
logo.src = img;
logo.alt = 'logo';
logo.classList.add('logoimg');
document.querySelector('.logo').appendChild(logo);
