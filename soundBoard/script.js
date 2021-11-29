const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// generate the button
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn'); //added for styling buttons

    btn.innerText = sound; 

    btn.addEventListener('click', () => {
        stopSongs();
            // id is the sound name in the list of strings above const sounds
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn); //style the buttons in css
});

// function stops sound last clicked sound if a new one is clicked
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause(); //no .stop() api for audio so just use pause() and set current time to 0
        song.currentTime = 0;
    });
};