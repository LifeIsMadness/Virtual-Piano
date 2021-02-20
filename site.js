document.addEventListener('keydown', function (e) {
    let key = e.key.toUpperCase();
    if ('ASDFGHJWETYU'.includes(key)) {
        new Audio(`${key}.mp3`).play();
    }
    else console.log(`Inappropriate key is pressed.`);

});

function getWhiteKeyWidth() {
    return window.getComputedStyle(document.querySelector('.white-keys kbd')).width;
}

function resizeBlackKeys() {
    let whiteKeyWidth = getWhiteKeyWidth().replace('px', '');
    let blackKeyWidth = whiteKeyWidth / 2;

    for (let i of document.querySelectorAll('.black-keys kbd')) {
        i.style = `width: ${blackKeyWidth}px;`
    }
}

resizeBlackKeys();
window.addEventListener('resize', function (e) {
   resizeBlackKeys();
})



