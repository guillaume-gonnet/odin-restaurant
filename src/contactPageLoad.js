import './style.css'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';

export default function contactPageLoad() {

    const navbar = document.createElement("ul");
    navbar.setAttribute("id", "navbar");

    const navbarInfo = document.createElement("li");
    navbarInfo.setAttribute("id", "info");
    navbarInfo.style.cursor = "pointer";
    navbarInfo.textContent = "Info";

    const navbarMenu = document.createElement("li");
    navbarMenu.setAttribute("id", "menu");
    navbarMenu.style.cursor = "pointer";
    navbarMenu.textContent = "Menu";

    const navbarContact = document.createElement("li");
    navbarContact.setAttribute("id", "contact");
    navbarContact.classList.add("active");
    navbarContact.textContent = "Contact";

    navbar.appendChild(navbarInfo);
    navbar.appendChild(navbarMenu);
    navbar.appendChild(navbarContact);


    const headerEl = document.createElement("h1");
    headerEl.classList.add("title");
    headerEl.textContent = "GG Cocktail Bar";

    const textEl = document.createElement("p");
    textEl.classList.add("subtitle");
    textEl.textContent = "Contact";

    const contactEl = document.createElement("p");
    contactEl.classList.add("text");
    contactEl.textContent = "We are locate at: Central Avenue, Columbus, Indiana";

    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://www.openstreetmap.org/export/embed.html?bbox=-85.9048891067505%2C39.20935416139042%2C-85.90295791625978%2C39.213261230945214&amp;layer=mapnik&amp;marker=39.211307723340425%2C-85.90392351150513")
    ifrm.style.width = "425px";
    ifrm.style.heigth = "350px";
    ifrm.style.border = "border: 1px solid black";

    const div = document.createElement("div");

    div.appendChild(navbar);
    div.appendChild(headerEl);
    div.appendChild(textEl);
    div.appendChild(contactEl);
    div.appendChild(ifrm);


    return div;
}
