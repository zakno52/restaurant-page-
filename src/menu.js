const container = document.createElement("div");

export function loadMenu() {
  // logo animation
  const logo = document.getElementsByTagName("h1")[0];
  logo.classList.add("moveLogoSmaller");
  logo.nextElementSibling.remove();

  class Dish {
    constructor(name, discription, price) {
      this.name = name;
      this.discription = this.discription;
      this.price = price;

      const dishBox = document.createElement("div");

      dishBox.innerHTML = `
      <div>${name}</div>
      <div>${discription}</div>
      <div>${price}$</div>`;

      container.append(dishBox);
    }
  }

  let burger = new Dish("burger", "great", 3);

  return container;
}
