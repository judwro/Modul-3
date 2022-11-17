console.log("Hi!");

let navigation__button = document.querySelector(".navigation__button");
let body = document.querySelector(".body");
let themName = document.querySelector(".themName");

navigation__button.addEventListener("click", () => {
    body.classList.toggle("dark");

    themName.innerText = body.classList.contains("dark") ? "biały" : "szary";

});

