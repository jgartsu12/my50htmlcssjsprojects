const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// when app loads
updateBigCup();


smallCups.forEach((cup, idx) => {
    // console.log(idx); 
    // shows index for each cup

    cup.addEventListener('click', () => highlightCups(idx))
});

// function that when cup is clicked adds the full class to add water
function highlightCups(idx) {
    // console.log(idx); 
    // when you click on a cup, it shows the index in console
    
    // toggle last cup to empty if you click then decrease based on current idx
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    
    smallCups.forEach((cup, idx2) => {
        // if small cups to the right are clicked on thsoe small cups should fill
        if(idx2 <= idx){
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    // update big cups when added to big cup
    updateBigCup();
}

function updateBigCup() {
    // get num of full cups
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    console.log(fullCups);
    // console logs prints number of full cups

    const totalCups = smallCups.length;
    // console.log(totalCups); // prints total small cups even if not filled

    // hide percentage if empty
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        // if something in it what to display percentage
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    // get rid of word remained if full 100%
    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        // add word remained back to dom when going to lower %
        remained.style.visibility = 'visible';
        // show remaining liters again
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}