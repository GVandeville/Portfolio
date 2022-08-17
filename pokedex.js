var revert = 0;

//Play a sound effect
function playA() {
    var audio = document.getElementById("audioA");
    audio.play();
}

function playB() {
    var audio = document.getElementById("audioB");
    audio.play();
    audio.volume = 1.0;

}

function playLuxray() {
    var audio = document.getElementById("audioLuxray");
    audio.play();
    audio.volume = 0.1;

}

//Launch sound effect and change the image
function showPicture1() {
    playA();
    millisecondsToWait = 200;
    setTimeout(function () { document.querySelector('.popup-image img').src = "images/philippines-monument.png" }, millisecondsToWait);
    setTimeout(function () { document.querySelector('.popup-image').style.display = 'block' }, millisecondsToWait);
}

function showPicture2() {
    playA();
    millisecondsToWait = 200;
    setTimeout(function () { document.querySelector('.popup-image img').src = "images/indonesia-monument.jpg" }, millisecondsToWait);
    setTimeout(function () { document.querySelector('.popup-image').style.display = 'block' }, millisecondsToWait);
}

function showPicture3() {
    playA();
    millisecondsToWait = 200;
    setTimeout(function () { document.querySelector('.popup-image img').src = "images/malaysia-monument.jpg" }, millisecondsToWait);
    setTimeout(function () { document.querySelector('.popup-image').style.display = 'block' }, millisecondsToWait);
}

function showPicture4() {
    playA();
    millisecondsToWait = 300;
    if (revert % 2 === 0) {
        setTimeout(function () { document.querySelector('#picture img').src = "images/pixel-art-luxray.png" }, millisecondsToWait);
        setTimeout(function () { playLuxray() }, millisecondsToWait);
    }
    else {
        setTimeout(function () { document.querySelector('#picture img').src = "images/pixel-art.png" }, millisecondsToWait);
    }
    revert++;
}

//Function triggered if clicked on a button with an Id
let btn = document.getElementById("Blue1");
btn.addEventListener('click', event => {
    showPicture1();
});

let btn2 = document.getElementById("Blue2");
btn2.addEventListener('click', event => {
    showPicture2();
});

let btn3 = document.getElementById("Blue3");
btn3.addEventListener('click', event => {
    showPicture3();
});

let btn4 = document.getElementById("profileButton");
btn4.addEventListener('click', event => {
    showPicture4();
});

let music = document.getElementById('player');
music.addEventListener("playing", () => {
    music.volume = 0.2;
});

//Function triggered if clicked on a cross
let cross = document.querySelector('.popup-image span');
cross.addEventListener('click', event => {
    //Possibility to quit an image
    document.querySelector('.popup-image').style.display = 'none';
});