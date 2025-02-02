import "./styles.css";
// Import all functions
import { loadHero } from "./hero.js";
import { loadBook } from "./book.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

const pageModule = (function () {
  // variables
  const navButtons = document.querySelectorAll(".center");
  const output = document.getElementById("content");

  output.append(loadHero());
  // Private Methods
  function showPage(index) {
    if (index === 0) {
      output.style.minHeight = "calc(100vh - 70px)";
      output.append(loadBook());
    }
    if (index === 1) {
      output.style.minHeight = "unset";
      output.append(loadMenu());
    }
    if (index === 2) {
      output.style.minHeight = "unset";
      output.append(loadAbout());
    }
  }

  // Events
  function _setupEventListeners() {
    navButtons.forEach((button, index) => {
      button.addEventListener("click", () => showPage(index));
    });
  }

  // Events - Initialize module
  _setupEventListeners();
})();
