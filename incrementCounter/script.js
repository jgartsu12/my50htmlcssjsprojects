const counters = document.querySelectorAll('.counter')

// in page loads it counts from 0 up to its number of subscribers
counters.forEach(counter => {
    // starts at string of 0 when page starts to load
    counter.innerText = '0'

    // declares the function
    const updateCounter = () => {
        // tells it the number which number to increase to/stop at
        const target = +counter.getAttribute('data-target')
        // console.log(typeof target, target)
        // logs to the consome number and value in data-target
        const c = +counter.innerText

        const increment = target / 200 
        //how much you want it to increment (smaller the number the faster it increments)

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            // round number up
            setTimeout(updateCounter, 1)
            // waits 1ms before running
        } else {
            counter.innerText = target
        }
    }
    // runs the function
    updateCounter()
})