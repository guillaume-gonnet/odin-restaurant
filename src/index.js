import infoPageLoad from "./infoPageLoad.js"
import menuPageLoad from "./menuPageLoad.js";
import contactPageLoad from "./contactPageLoad.js";
import 'leaflet/dist/leaflet.css';



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

    const navbarContact = document.getElementById("contact");
    navbarContact.addEventListener('click', (e) => {
        e.preventDefault();
        load(contactPageLoad());
    });
}

load(infoPageLoad());

