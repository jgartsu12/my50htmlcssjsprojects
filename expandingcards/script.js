//js var that brings panels from html into js file
const panels = document.querySelectorAll('.panel');

// event listener on each panel DIV so if they are clicked they expand
// curly braces are not needed for one function arg for arrow function
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // remove class of active on all panel class divs
        removeActiveClasses();
        // if panel clicked on we want to add class of active, we use classlist to add active to panel- panel active div class, makes them flex 5 in css
        panel.classList.add('active');
    });
});


// function that removes all active classes on panel active divs
function removeActiveClasses() {
    // curly braces are not needed for one function arg for arrow function
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
    console.log('panel active class removed')
};