import img1 from "./img/11.jpg";
import img2 from "./img/22.jpg";
import img3 from "./img/33.jpg";
import chefImg from "./img/chef.jpg";

const container = document.createElement("div");
container.classList.add("aboutContainer");

class AboutSection {
  constructor(image, title, text) {
    this.image = image;
    this.title = title;
    this.text = text;

    const aboutBox = document.createElement("div");
    aboutBox.classList.add("aboutBox");

    aboutBox.innerHTML = `
        <img class="aboutImg" src="${image}" alt="">
        <div class="aboutInfo">
        <div class="aboutTitle">${title}</div>
        <div class="abouttext">${text}</div>
        </div>`;

    container.append(aboutBox);
  }
}
//prettier-ignore
export function loadAbout() {
  container.innerHTML = "";
  // logo animation
  const logo = document.querySelector("h1");
  logo.classList.add("logoAnimation2", "logoAnimation3");
  logo.nextElementSibling?.remove();


  //prettier-ignore
  const chefSection= new AboutSection (chefImg,"Name","Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur")
  const info1= new AboutSection (img1,"Name","Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur")
  const info2= new AboutSection (img2,"Name","Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur")
  const info3= new AboutSection (img3,"Name","Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur")

  return container;
}
