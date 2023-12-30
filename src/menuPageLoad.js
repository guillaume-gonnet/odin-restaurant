import './style.css'

export default function menuPageLoad() {

    const navbar = document.createElement("ul");
    navbar.setAttribute("id", "navbar");

    const navbarInfo = document.createElement("li");
    navbarInfo.setAttribute("id", "info");
    navbarInfo.textContent = "Info";

    const navbarMenu = document.createElement("li");
    navbarMenu.setAttribute("id", "menu");
    navbarMenu.classList.add("active");
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
    textEl.textContent = "Menu";

    const cocktails = document.createElement("div");
    cocktails.setAttribute("id", "cocktails");

    const cocktail1 = document.createElement("div");
    cocktail1.classList.add("cocktail");
    const cocktail1Title = document.createElement("h4");
    cocktail1Title.classList.add("cocktailTitle");
    cocktail1Title.textContent = "Daiquiri";
    const cocktail1Ingredients = document.createElement("p");
    cocktail1Ingredients.classList.add("cocktailIngredients");
    cocktail1Ingredients.textContent = "Rhum, Lime juice. Shaken."

    cocktail1.appendChild(cocktail1Title);
    cocktail1.appendChild(cocktail1Ingredients);

    cocktails.appendChild(cocktail1);

    const div = document.createElement("div");

    div.appendChild(navbar);
    div.appendChild(headerEl);
    div.appendChild(textEl);
    div.appendChild(cocktails);

    return div;
}
