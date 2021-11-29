const insert = document.getElementById('insert')

// keyCode is deprecated, keydown = keystroke
window.addEventListener('keydown', (event) => {
    // console.log(event); ternary op needed for space so its not empty in 
    // console.log(event.key);
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>
<div class="key">
  ${event.keyCode} 
  <small>event.keyCode</small>
</div>
<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `
});