const open = document.getElementById('open');
const close = document.getElementById('close');
// since container is a class you use querySelector
const container = document.querySelector('.container');

// add event listener to open
open.addEventListener('click', () => container.classList.add('show-nav'));

// add listener to close
close.addEventListener('click', () => container.classList.remove('show-nav'));
