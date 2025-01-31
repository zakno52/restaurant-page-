// create new dom elements
const intro = document.createElement("div");
const bookingForm = document.createElement("form");
const container = document.createElement("div");

export function loadBook() {
  // logo animation
  const logo = document.querySelector("h1");
  logo.nextElementSibling?.remove();
  logo.classList.remove("moveLogoSmaller");
  logo.classList.add("moveLogo");

  // booking intro and form
  intro.classList.add("intro");
  intro.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";

  bookingForm.innerHTML = `<div>
        <label for="tableNumber">Table Number:</label>
        <input type="number" id="tableNumber" name="tableNumber" required>
        <label for="personNumber">For:</label>
        <select id="personNumber" name="personNumber">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3-4">3 or 4</option>
            <option value=">4">More than 4</option>
        </select>
        <label for="date">Select Date:</label>
        <input type="date" id="date" name="date" required>
        <button type="submit">Book Now</button>
        </div>`;

  container.classList.add("bookingContainer");
  //for showing it smoothly
  setTimeout(() => {
    container.classList.add("BookingOpacity");
  }, 500);
  //merging in one div
  container.append(intro, bookingForm);
  return container;
}
