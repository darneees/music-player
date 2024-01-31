const sound = document.getElementById("sound-nature");
const prev = document.getElementById("prev");
const playPause = document.getElementById("play-pause");
const next = document.getElementById("next");
const change = document.getElementById("change-image");

const quantSounds = 6;
let played = false;
let type = 1;

function playSound() {
    playPause.classList.remove("ph-play");
    playPause.classList.add("ph-pause");
    sound.play();
    played = true;
}

function pauseSound() {
    playPause.classList.add("ph-play");
    playPause.classList.remove("ph-pause");
    sound.pause();
    played = false;
}

function playOrPauseSound() {
    if (played === true) {
        pauseSound();
    } else {
        playSound();
    }
}

function soundPrev() {
    if (type === 1) {
        type = quantSounds;
    } else {
        type -= 1;
    }
    audio.src = "books/dom-casmurro/" + type + ".mp3";
    playSound();
}

function soundNext() {
    if (type < quantSounds) {
        type += 1;
    } else {
        type = 1;
    }
    sound.src = "resource/audios/" + type +".mp3";
    playSound();
}

playPause.addEventListener("click", playOrPauseSound);
prev.addEventListener("click", soundPrev);
next.addEventListener("click", soundNext);
playPause.addEventListener("click", playOrPauseSound);