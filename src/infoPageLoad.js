import ImageRestaurant from "./restaurantImage.jpg";
import './style.css'

export default function infoPageLoad() {

    const navbar = document.createElement("ul");
    navbar.setAttribute("id", "navbar");

    const navbarInfo = document.createElement("li");
    navbarInfo.setAttribute("id", "info");
    navbarInfo.textContent = "Info";
    navbarInfo.classList.add("active");

    const navbarMenu = document.createElement("li");
    navbarMenu.setAttribute("id", "menu");
    navbarMenu.textContent = "Menu";

    const navbarContact = document.createElement("li");
    navbarContact.setAttribute("id", "contact");
    navbarContact.textContent = "Contact";

    navbar.appendChild(navbarInfo);
    navbar.appendChild(navbarMenu);
    navbar.appendChild(navbarContact);


    const headerEl = document.createElement("h1");
    headerEl.classList.add("title");
    headerEl.textContent = "GG Cocktail Bar";

    const textEl = document.createElement("p");
    textEl.classList.add("subtitle");
    textEl.textContent = "Welcome to GG Cocktail bar. The only bar in Columbus with original recipes. All our cocktails are made with fresh ingredients. We are preventing dilution by water/ice to conserve the most flavors! The bartender Guillaume says 'I decided to open this cocktail bar because I was disappointed in the cocktails I found in restaurants. Low in alcohol, too much ice, I wanted a place where people could drink tasty coktails! So I created this place! I hope you'll enjoy it!'";

    const imageEl = new Image();
    imageEl.src = ImageRestaurant;
    imageEl.setAttribute("alt", "restaurant image")

    const div = document.createElement("div");

    div.appendChild(navbar);
    div.appendChild(headerEl);
    div.appendChild(textEl);
    div.appendChild(imageEl);

    return div;
}
