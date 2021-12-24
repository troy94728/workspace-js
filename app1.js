const title = document.querySelector("div.hello:first-child h1");
// 선택자 다양하게 가능

// console.dir(title);
// 객체까지 다 출력함

function handleTitleClick() {
    console.log("title was clicked");
}

title.style.color = "blue";
// 프로퍼티 바꾸기

title.addEventListener("click", handleTitleClick);
