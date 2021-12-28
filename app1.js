const title = document.querySelector("div.hello:first-child h1");
// 선택자 다양하게 가능

const hellos = document.getElementsByClassName("hello");
// console.dir(title);
console.log(hellos);
// 객체까지 다 출력함

title.innerText = "got you";

console.log(title.id);
console.log(title.className);

function handleTitleClick() {
    console.log("title was clicked");
}

title.style.color = "blue";
// 프로퍼티 바꾸기

title.addEventListener("click", handleTitleClick);
