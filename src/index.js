import "./styles.css";
// Import all functions
import { loadHero } from "./hero.js";
// import { loadHome} from './Home.js';
// import { loadMenu } from './menu.js';
// import { loadAbout } from './About.js';

const pageModule = (function () {
  // variables
  const navButtons = document.querySelectorAll(".center");
  const output = document.getElementById("content");
  output.append(loadHero());
  // Private Methods
  function showPage(index) {
    if (index === 0) {
      loadHome();
    }
    if (index === 1) {
      loadMenu();
    }
    if (index === 2) {
      loadAbout();
    }
  }

  // Events
  function _setupEventListeners() {
    navButtons.forEach((button, index) => {
      button.addEventListener("click", () => showPage(index));
    });
  }

  // Initialize module
  _setupEventListeners();
})();
