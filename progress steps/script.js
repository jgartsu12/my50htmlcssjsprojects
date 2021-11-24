const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// represent active classes
let currentActive = 1;

// next button
next.addEventListener('click', () => {
    // increment button on click
    currentActive++;
    // console.log(currentActive);
    // make boundary so increment cant go past 4 circles
    if(currentActive > circles.length) {
        currentActive = circles.length;
    };
    // console.log(currentActive);
    update();
});

// previous btn
prev.addEventListener('click', () => {
    // decrement by 1 button on click
    currentActive--;
    // console.log(currentActive);
    // make boundary so decrement cant go past 1st circles
    if(currentActive < 1) {
        currentActive = 1;
    };
    // console.log(currentActive);

    update();
});

function update() {
    // light up circle
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        };
    });
    // handle line to light up forward direction
    const actives = document.querySelectorAll('.active');

    // console.log((actives.length / circles.length) * 100);
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%';

    // add button next and prev functionality
    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive===circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    };
};