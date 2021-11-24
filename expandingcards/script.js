//js var that brings panels from html into js file
const panels = document.querySelectorAll('.panel');

// event listener on each panel DIV so if they are clicked they expand
panels.forEach((panel) => {
    // event listener listens for a click, when event happens run a function
    panel.addEventListener('click', () => {
        // when a click occurs on the page, prints this to console
        console.log('eventlistener heard click');
    });

});