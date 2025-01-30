import "./styles.css";

const pages = (function name(params) {
  // variables
  const navButton = document.querySelectorAll(".center");
  const output = document.getElementById("content");
  // variables-creatElements
  const heroLogo = document.createElement("h1");
  heroLogo.innerHTML = "ELYSIAN";
  // Events
  navButton.forEach((button, index) => {
    button.addEventListener("click", () => showPage(index));
  });

  //handlers
  function showPage(index) {
    if (index === 0) {
      heroLogo.classList.add("logo");
      output.append(heroLogo);
    }
    if (index === 1) {
    }
    if (index === 2) {
    }
  }
})();
