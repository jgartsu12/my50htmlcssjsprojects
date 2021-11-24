//js var that brings panels from html into js file
const panels = document.querySelectorAll('.panel');

// event listener on each panel DIV so if they are clicked they expand
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // console.log('eventlistener heard click');
        // if panel clicked on we want to add class of active, we use classlist to add active to panel- panel active div class
        panel.classList.add('active');
        // console.log('panel should expand when clicked');
    });

});