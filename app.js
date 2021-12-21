const playerName = "gon";
const playerPoints = 1212;
const playerHandsome = false;
const playerFat = "little bit";

const players = {
    name: "gongon",
    points: 20,
    fat: true,
};

console.log(players);
players.points = 10;
console.log(players);
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
plus(5, 10);

const age = 96;

function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 3);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

console.log("==");
console.log(plusResult);
console.log(minusResult);
console.log(timesResult);
console.log(divideResult);
console.log(powerResult);

const ageAge = prompt("how old are you");

console.log(typeof ageAge, typeof parseInt(ageAge));
