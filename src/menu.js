const btnBurger = document.getElementById("menu-btn");
const asideMenu = document.getElementById("sidemenu");

btnMenu.addEventListener("click", (e) => {
    window.open("./src/CV_MELINAZELAYA.pdf", "_blank", "fullscreen=yes");
    return false;
});

btnBurger.addEventListener("click", (e) => {
    asideMenu.classList.toggle("menu-expanded");
    asideMenu.classList.toggle("menu-collapsed");
});
