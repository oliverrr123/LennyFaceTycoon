var lenny = document.getElementById("lenny");
var plusScore = document.getElementById("plusScore");
var scoreTxt = document.getElementById("score");
var buttonState = 0;
var deg = 0;
var score = 0;

lenny.onmousedown = function(event) {
    lenny.style.scale = "2";
    deg = Math.floor(Math.random() * 41) - 20;
    lenny.style.rotate = `${deg}deg`;
    plusScore.style.visibility = "visible";
    score++;
    scoreTxt.innerHTML = `score: ${score}`;
    plusScore.style.translate = "0px -25px";
}

lenny.onmouseup = function(event) {
    lenny.style.scale = "1";
    lenny.style.rotate = "0deg";
    plusScore.style.visibility = "hidden";
    plusScore.style.translate = "0px 0px";
}

