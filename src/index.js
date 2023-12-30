import infoPageLoad from "./infoPageLoad.js"
import menuPageLoad from "./menuPageLoad.js";


function load(page) {
    document.body.innerHTML = "";
    document.body.appendChild(page);

    const navbarInfo = document.getElementById("info");
    navbarInfo.addEventListener('click', (e) => {
        e.preventDefault();
        load(infoPageLoad());
    });

    const navbarMenu = document.getElementById("menu");
    navbarMenu.addEventListener('click', (e) => {
        e.preventDefault();
        load(menuPageLoad());
    });
}

load(infoPageLoad());

