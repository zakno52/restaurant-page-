import img1 from "./img/11.jpg";
import img2 from "./img/22.jpg";
import img3 from "./img/33.jpg";
import chefImg from "./img/chef.jpg";

const container = document.createElement("div");
container.classList.add("aboutContainer");
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";

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
        <div class="aboutText">${text}</div>
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
  const chefSection= new AboutSection (chefImg,"Our Head Chef",lorem)
  const info1= new AboutSection (img1,"Cozy Space",lorem)
  const info2= new AboutSection (img2,"Music Space",lorem)
  const info3= new AboutSection (img3,"Our History",lorem)


  setTimeout(() => {
    container.style.opacity = "1";
  }, 500);
  
  return container;
}
