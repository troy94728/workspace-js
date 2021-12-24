const playerName = "gon";
const playerPoints = 1212;
const playerHandsome = false;
const playerFat = "little bit";

const players = {
    name: "gongon",
    points: 20,
    fat: true,
};

//console.log(players);
players.points = 10;
//console.log(players);
//players를 const로 상수처리 햇는데 왜 players.points로 업데이트할 수 있지?

function plus(a, b) {
    console.log(a + b);
    console.log(a - b);
}

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    },
};
//plus(5, 10);

const age = 96;

function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

//console.log(krAge);

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 3);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

// console.log("==");
// console.log(plusResult);
// console.log(minusResult);
// console.log(timesResult);
// console.log(divideResult);
// console.log(powerResult);

//const ageAge = parseInt(prompt("how old are you"));

//console.log(typeof ageAge, typeof parseInt(ageAge));

//console.log(isNaN(ageAge));
//==> true

// if (isNaN(ageAge) || age < 0) {
//     console.log("please write a real positive number");
// } else if (age < 18) {
//     console.log("you are too young");
// } else if (age > 18 && age <= 50) {
//     console.log("you can drink");
// } else if (age > 50 && age <= 80) {
//     console.log("you should exercise");
// } else if (age > 80) {
//     console.log("you can whatever you want");
// } else if (age == 100) {
//     console.log("you are wise");
// } else {
//     console.log("thank you");
// }

//const title = document.getElementById("title");
//id가 title을 찾아감

//title.innerText = "Got you!"; //js로 html변경

//console.log(title.id);
//id찾아감
//id이름 출력
//console.log(title.className);
//class찾아감
//class이름 출력

const hellos = document.getElementsByClassName("#hello");

//console.log(hellos);

const divTag = document.querySelector("#hello");
//const divTag = document.getElementById("hello");
//====>똑같은 코드
//첫번째 선택자만 가져옴
//다 가져오려면 querySelectorAll써야함
//css선택자 선택할 수 있음
//console.log(divTag);
