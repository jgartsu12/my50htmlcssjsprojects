// variable to store joke element
const jokeEl = document.getElementById('joke');
// var to store joke button
const jokeBtn = document.getElementById('jokeBtn');

// event listener on joke button to cause the generateJoke to run
jokeBtn.addEventListener('click', generateJoke);

generateJoke()

// USING ASYNC/AWAIT - when using await the function needs aysnc before the function name
// we dont want html so we need to create config variable with headers obj with a key:value of Accept(key): app/json (value)
async function generateJoke() {
  const config = {
    //   have to set headers to accept app/json because default is html since http request
    headers: {
        Accept: 'application/json',
     },
    };

//  fetch api with endpoint response store in constant variable
//   fetch returns a promise when using async, aysnc await make cleaner code so you dont have to do multiple .then()
// fetch is built into the browser, with axios you need a cdn installed
    // res and data return a promise, so wherever there is a promise you need an await
  const res = await fetch('https://icanhazdadjoke.com', config);
//   console.log(res);

//   data object in json to get the joke key value
  const data = await res.json();
//   console.log(data);

    // take joke element of the data object and set to inner html element
  jokeEl.innerHTML = data.joke;
//   console.log(jokeEl.innerHTML); prints data.joke to console to get joke value
};


// way to do fetch without async await 
/*   not using await to make cleaner JS
       USING .then()
function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke
      console.log(data.joke)
    })
} */
