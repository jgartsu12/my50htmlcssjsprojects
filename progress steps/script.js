const progress = document.getElementById('progress');
console.log(progress); 
// returns:
{/* <div class="progress" id="progress"></div> */}

const prev = document.getElementById('prev');
console.log(prev);
// {/* <button class="button btn" id="prev" disabled>Prev</button> */}

const next = document.getElementById('next');
console.log(next);
// <button class="button btn" id="next">Next</button>

// more than one type of circle class so you need to querySelectorAll()
const circles = document.querySelectorAll('.circle'); /* require prepended . sense multiple circles */
console.log(circles);
/* 
NodeList(4) [div.circle.active, div.circle, div.circle, div.circle]
*/