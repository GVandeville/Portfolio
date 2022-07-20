//Play a sound effect
function playA() {
    var audio = document.getElementById("audioA");
    audio.play();
}
function playB() {
    var audio = document.getElementById("audioB");
    audio.play();
}

//Recognize the ID of each blue button and show the corresponding audio/image.
function showImage() {
    millisecondsToWait = 250;

    document.querySelectorAll('#blueButtons1').forEach(blueButton => {
        document.getElementById('1').onclick = () => {
            var audio = document.getElementById("audioA");
            audio.play();
            setTimeout(function () { document.querySelector('.popup-image img').src = "images/philippines-monument.png" }, millisecondsToWait);
            setTimeout(function () { document.querySelector('.popup-image').style.display = 'block' }, millisecondsToWait);
        }

        document.getElementById('2').onclick = () => {
            var audio = document.getElementById("audioA");
            audio.play();
            setTimeout(function () { document.querySelector('.popup-image img').src = "images/indonesia-monument.jpg" }, millisecondsToWait);
            setTimeout(function () { document.querySelector('.popup-image').style.display = 'block' }, millisecondsToWait);
        }

        document.getElementById('3').onclick = () => {
            var audio = document.getElementById("audioA");
            audio.play();
            setTimeout(function () { document.querySelector('.popup-image img').src = "images/malaysia-monument.jpg" }, millisecondsToWait);
            setTimeout(function () { document.querySelector('.popup-image').style.display = 'block' }, millisecondsToWait);
        }
    });

    //Possibility to quit the image
    document.querySelector('.popup-image span').onclick = () => {
        document.querySelector('.popup-image').style.display = 'none';
    }
}


