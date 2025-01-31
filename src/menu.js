// Import images (assuming they're in src/img)
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";

const container = document.createElement("div");
container.classList.add("dishContainer");

class Dish {
  constructor(image, name, description, price) {
    this.image = image;
    this.name = name;
    this.description = description;
    this.price = price;

    const dishBox = document.createElement("div");
    dishBox.classList.add("dishBox");

    dishBox.innerHTML = `
      <img class="dishImg" src="${image}" alt="">
      <div>${name}</div>
      <div>${description}</div>
      <div>$${price}</div>`;

    container.append(dishBox);
  }
}

export function loadMenu() {
  container.innerHTML = "";
  // logo animation
  const logo = document.querySelector("h1");
  logo.classList.add("moveLogoSmaller");
  logo.nextElementSibling?.remove();

  //prettier-ignore
  // Menu data - easily modifiable
  const menuItems = [
    new Dish(img1,"Name", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 12),
    new Dish(img2,"Name", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 9),
    new Dish(img3,"Name", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 5),
    new Dish(img1,"Name", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 12),
    new Dish(img2,"Name", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 9),
    new Dish(img3,"Name", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 5),
    new Dish(img1,"Name", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 12),
    new Dish(img2,"Name", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 9),
    new Dish(img3,"Name", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 5),
  ];

  return container;
}
