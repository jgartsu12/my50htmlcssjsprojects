const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// init value at 0
let load = 0;

// var so it loads every 30 millisec
let int = setInterval(blurring, 30);

function blurring() {
    load++;
    // console.log(load);
    
    // stop at 100
    if(load > 99) {
        clearInterval(int);
    };

    loadText.innerText=`${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
