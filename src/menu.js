// Import images (assuming they're in src/img)
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4special from "./img/special.jpg";

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
      <div class="dishInfo">
      <div class="dishName">${name}</div>
      <div class="dishDesc">${description}</div>
      <div class="dishPrice">$${price}</div>
      </div>`;

    container.append(dishBox);
  }
}

class SpeacialDish {
  constructor(image, name, description, price) {
    this.image = image;
    this.name = name;
    this.description = description;
    this.price = price;

    const dishBox = document.createElement("div");
    dishBox.classList.add("specialDishBox");

    dishBox.innerHTML = `
      <div class="speacialDishTitle">Today's Special</div>
      <img class="speacialDishImg" src="${image}" alt="">
      <div class="speacialDishInfo">
      <div class="speacialDishName">${name}</div>
      <div class="speacialDishDesc">${description}</div>
      <div class="speacialDishPrice">$${price}</div>
      </div>`;

    container.append(dishBox);
  }
}

export function loadMenu() {
  container.innerHTML = "";
  // logo animation
  const logo = document.querySelector("h1");
  logo.classList.add("logoAnimation2");
  logo.classList.remove("logoAnimation3");
  logo.nextElementSibling?.remove();

  //prettier-ignore
  // Menu data - easily modifiable
  const speacialDish= new SpeacialDish (img4special,"Name","Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur",30)
  //prettier-ignore
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
