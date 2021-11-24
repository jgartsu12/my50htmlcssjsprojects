const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// expand page left side
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
// bring back to normal page size right side
left.addEventListener('mouseleave', () =>container.classList.remove('hover-left'));

// expand page right side
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
// bring back to normal page size right side
right.addEventListener('mouseleave', () =>container.classList.remove('hover-right'));