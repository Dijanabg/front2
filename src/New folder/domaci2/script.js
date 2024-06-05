var audiokonj = document.getElementById("audio1");
var imgkonj = document.getElementById("slika1");
var audiokrava = document.getElementById("audio2");
var imgkrava = document.getElementById("slika2");
var audiosvinja = document.getElementById("audio3");
var imgsvinja = document.getElementById("slika3");
var audiopas = document.getElementById("audio4");
var imgpas = document.getElementById("slika4");
var audiokoka = document.getElementById("audio5");
var imgkoka = document.getElementById("slika5");

function playkonj() {
    audiokonj.play();
}

function stopkonj() {
    audiokonj.pause();
}
function playkrava() {
    audiokrava.play();
}

function stopkrava() {
    audiokrava.pause();
}
function playsvinja() {
    audiosvinja.play();
}

function stopsvinja() {
    audiosvinja.pause();
}
function playpas() {
    audiopas.play();
}

function stoppas() {
    audiopas.pause();
}
function playkoka() {
    audiokoka.play();
}

function stopkoka() {
    audiokoka.pause();
}

imgkonj.addEventListener('mouseover', playkonj);
imgkonj.addEventListener('mouseout', stopkonj);
imgkrava.addEventListener('mouseover', playkrava);
imgkrava.addEventListener('mouseout', stopkrava);
imgsvinja.addEventListener('mouseover', playsvinja);
imgsvinja.addEventListener('mouseout', stopsvinja);
imgpas.addEventListener('mouseover', playpas);
imgpas.addEventListener('mouseout', stoppas);
imgkoka.addEventListener('mouseover', playkoka);
imgkoka.addEventListener('mouseout', stopkoka);