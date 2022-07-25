//Play a sound effect
function playA() {
    var audio = document.getElementById("audioA");
    audio.play();
}

function playB() {
    var audio = document.getElementById("audioB");
    audio.play();
}

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

let btn = document.getElementById("1");
btn.addEventListener('click', event => {
    showPicture1();
});

let btn2 = document.getElementById("2");
btn2.addEventListener('click', event => {
    showPicture2();
});

let btn3 = document.getElementById("3");
btn3.addEventListener('click', event => {
    showPicture3();
});

//Possibility to quit the image
document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}