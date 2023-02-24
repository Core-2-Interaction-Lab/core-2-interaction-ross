const rappers = document.querySelectorAll('.grid-item');

rappers.forEach(rapper => {
    rapper.addEventListener('click', () => {
        // do stuff / play audio file
        const audio = rapper.querySelector('audio');
        audio.play();
        rapper.classList.add('jiggle');
        setTimeout(() => {
            rapper.classList.remove('jiggle');
        }, 1200);
    })
})