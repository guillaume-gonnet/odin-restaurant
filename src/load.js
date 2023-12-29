import ImageRestaurant from "./restaurantImage.jpg";

export default function pageLoad() {
    const headerEl = document.createElement("h1");
    headerEl.classList.add("title");
    headerEl.textContent = "GG Restaurant";

    const textEl = document.createElement("p");
    textEl.classList.add("text");
    textEl.textContent = "This restaurant is very good";

    const imageEl = new Image();
    imageEl.src = ImageRestaurant;
    imageEl.setAttribute("alt", "restaurant image")

    const div = document.createElement("div");

    div.appendChild(headerEl);
    div.appendChild(textEl);
    div.appendChild(imageEl);

    return div;
}
