// tags element in html
const tagsEl = document.getElementById('tags')
// textarea id in html
const textarea = document.getElementById('textarea')

// focus method automatically puts cursor on textarea so you can start typing
textarea.focus()

// keyup is when you press down and key goes back up
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value) 

    // check to see if enter is hit
    if(e.key === 'Enter') {
        // clear input after 10 miliseconds
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

//function creates tag based on input text
function createTags(input) {
    // console.log(input) - shows input as string in console - what is typed
    // splits on the comma, then creates an array for whats inside each comma
    // filter high order array method 
    // - return things based on conditional expression- for each tag it will trim off any whitespace
    // map the trim without any whitesace
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    //clear tags elements so they dont file up
    tagsEl.innerHTML = ''

    // tags array is then looped through:
    // created a span tag that adds a class 
    // sets innerText to the tag input typed in
    // appendChild adds each new tag element in seperated by the commas
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}


function randomSelect() {
    // number of times it will highlight each tag before it stops
    const times = 30
    // pick random tag every 100ms
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);
    
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

// picks random tag in the tags array/nodelist using the index
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

// highlights a tag navy blue when randomly picked
function highlightTag(tag) {
    tag.classList.add('highlight')
}

// removes the navy blue highlight
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}