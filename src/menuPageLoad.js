import './style.css'

export default function menuPageLoad() {

    const navbar = document.createElement("ul");
    navbar.setAttribute("id", "navbar");

    const navbarInfo = document.createElement("li");
    navbarInfo.setAttribute("id", "info");
    navbarInfo.style.cursor = "pointer";
    navbarInfo.textContent = "Info";

    const navbarMenu = document.createElement("li");
    navbarMenu.setAttribute("id", "menu");
    navbarMenu.classList.add("active");
    navbarMenu.textContent = "Menu";

    const navbarContact = document.createElement("li");
    navbarContact.setAttribute("id", "contact");
    navbarContact.style.cursor = "pointer";
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

    //Cocktail 1
    const cocktail1 = document.createElement("div");
    cocktail1.classList.add("cocktail");
    const cocktail1Title = document.createElement("h4");
    cocktail1Title.classList.add("cocktailTitle");
    cocktail1Title.textContent = "Daiquiri";
    const cocktail1Ingredients = document.createElement("p");
    cocktail1Ingredients.classList.add("cocktailIngredients");
    cocktail1Ingredients.textContent = "Rhum, Sugar, Lime juice. Shaken."

    cocktail1.appendChild(cocktail1Title);
    cocktail1.appendChild(cocktail1Ingredients);

    //Cocktail 2
    const cocktail2 = document.createElement("div");
    cocktail2.classList.add("cocktail");
    const cocktail2Title = document.createElement("h4");
    cocktail2Title.classList.add("cocktailTitle");
    cocktail2Title.textContent = "Margarita";
    const cocktail2Ingredients = document.createElement("p");
    cocktail2Ingredients.classList.add("cocktailIngredients");
    cocktail2Ingredients.textContent = "Tequila, Triple Sec, Lime juice. Shaken."

    cocktail2.appendChild(cocktail2Title);
    cocktail2.appendChild(cocktail2Ingredients);

    //Cocktail 3
    const cocktail3 = document.createElement("div");
    cocktail3.classList.add("cocktail");
    const cocktail3Title = document.createElement("h4");
    cocktail3Title.classList.add("cocktailTitle");
    cocktail3Title.textContent = "Gin Smash";
    const cocktail3Ingredients = document.createElement("p");
    cocktail3Ingredients.classList.add("cocktailIngredients");
    cocktail3Ingredients.textContent = "Gin, Mint, Sugar, Carbonated water. Stir."

    cocktail3.appendChild(cocktail3Title);
    cocktail3.appendChild(cocktail3Ingredients);

    cocktails.appendChild(cocktail1);
    cocktails.appendChild(cocktail2);
    cocktails.appendChild(cocktail3);

    const div = document.createElement("div");

    div.appendChild(navbar);
    div.appendChild(headerEl);
    div.appendChild(textEl);
    div.appendChild(cocktails);

    return div;
}
