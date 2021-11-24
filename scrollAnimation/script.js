const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes(); //wont show until scroll without this here

// check the position of each box, where is the trigger point where the box come in 
function checkBoxes() {
    // window.innerHeight gets inside height of the window - where trigger occurs
    const triggerBottom = window.innerHeight / 5 * 4;
    // console.log(triggerBottom)

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; //gets DOM rect object - where in the viewport is it

        if (boxTop < triggerBottom) {
            box.classList.add('show'); //scroll down
        } else {
            box.classList.remove('show'); //scroll up
        };
    });
};