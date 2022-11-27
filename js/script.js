{
    const welcome = () => {
        console.log("Hi!");
    }

    const onChangeBackroundClick = () => {
        const body = document.querySelector(".body");
        const themName = document.querySelector(".themName");
        body.classList.toggle("dark");
        themName.innerText = body.classList.contains("dark") ? "biały" : "szary";

    };
    const init = () => {
        const navigation__button = document.querySelector(".navigation__button");
        navigation__button.addEventListener("click", onChangeBackroundClick);

        welcome();
    };

    init();
}