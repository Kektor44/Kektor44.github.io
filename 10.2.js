var ded = document.getElementById("ded");
var persent = document.getElementById("persent");
var main = document.getElementById("main");
var hover = document.getElementById("hover"),
    count2 = 0;
var kekk = 0;
var score = document.getElementById("score");
var commonScore = document.getElementById("commonScore"),
    step = kekk;


if (localStorage.getItem("score") !== null) {
    var newScore = localStorage.getItem("score");
    commonScore.innerHTML = newScore;

}

function tpDed() {
    var x = Math.floor((Math.random() * 80 ) + 2);
    var y = Math.floor((Math.random() * 75 ) + 1);
    ded.style.left = x + "%";
    ded.style.top = y + "%";

    count2 += 1;
    var num3 = hover.innerHTML = "Количество наведений: " + count2;
}

var button = document.getElementById("clickme"),
    count = 0;
ded.onclick = function () {
    count += 1;
    count1 -= 1;
    var num1 = button.innerHTML = "Количество попаданий: " + count;


    step += 3;
    kekk = commonScore.innerHTML = "Общее количество очков: " + step;
    localStorage.setItem("score", kekk);


};


var prom = document.getElementById("unclick"),
    count1 = 0;
main.onclick = function () {
    count1 += 1;
    var num2 = prom.innerHTML = "Количество промахов: " + count1;


    var summ = count / (count1 + count) * 100;
    persent.innerHTML = "Процент попаданий: " + Math.round(summ * 100) / 100 + "%";

    var sum1 = count * 3;
    score.innerHTML = "Очков за раунд: " + sum1;
    if (sum1 == 231){
        alert("Красава, достиг топового числа очков. Считай прошел игру)")
    }
};


function changeImg(imgName) {
    document.getElementById('ded').src = "images/" + imgName + ".png";
}



function gym() {
    main.style.backgroundImage = "url(\"https://memberhq.s3.amazonaws.com/splash-hume-july/uploads/Gym.jpg\")"
}
function pins() {
    main.style.backgroundImage = "url(\"https://www.natgeojunior.nl/wp-content/uploads/2017/07/pinguin3.jpg\")"
}
function beer() {
    main.style.backgroundImage = "url(\"https://st3.depositphotos.com/1007422/18899/i/1600/depositphotos_188992104-stock-photo-moscow-russia-march-18-2018.jpg\")"
}
function cream() {
    main.style.backgroundImage = "url(\"https://hips.hearstapps.com/rbk.h-cdn.co/assets/17/22/1600x800/landscape-1496270105-best-bb-creams.jpg?resize=1200:*\")"
}
function bmv() {
    main.style.backgroundImage = "url(\"http://www.kolesa.ru/uploads/bnnews/2014/05/08/25846_1399538431_11235x908256.jpg\")"
}
function arm() {
    main.style.backgroundImage = "url(\"https://novostipmr.com/sites/default/files/field/image/201809/3.jpg\")"
}
function arm1() {
    main.style.backgroundImage = "url(\"http://worldnomadgames.com/media/images/sport_types/Arm-Wrestling-Tournament_hiMEziz.jpg\")"
}

