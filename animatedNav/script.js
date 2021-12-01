// grabs toggle id on button
const toggle = document.getElementById('toggle')
// grabs nav id
const nav = document.getElementById('nav')

// classList.toggle() adds and removes active for css
toggle.addEventListener('click', () => nav.classList.toggle('active'))
