const menuButton = document.querySelector("#menuBtn");
const navigation = document.querySelector("#navMenu");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

    });
}