// Mobile hamburger menu handling

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const mobileNavOverlay = document.getElementById("mobilenav-overlay");

let isMenuOpen = false;

menuToggle.addEventListener("click", () => {
  if (!isMenuOpen) {
    openMobileNav();
  } else {
    closeMobileNav();
  }
});

mobileNavOverlay.addEventListener("click", () => {
  closeMobileNav();
});

function openMobileNav() {
  isMenuOpen = true;
  menuToggle.setAttribute("aria-expanded", isMenuOpen);
  menu.classList.add("header--navigation-active");
  mobileNavOverlay.classList.add("mobilenav--overlay-active");
}

function closeMobileNav() {
  isMenuOpen = false;
  menuToggle.setAttribute("aria-expanded", isMenuOpen);
  menu.classList.remove("header--navigation-active");
  mobileNavOverlay.classList.remove("mobilenav--overlay-active");
}

// Email subscription form handling

const subscriptionForm = document.getElementById("subscription-form");
const emailInput = document.getElementById("email-input");
const subscriptionMessage = document.getElementById("subscription-message");

subscriptionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const isEmailValid = checkEmailValidity(emailInput);
  if (isEmailValid) {
    emailInput.classList.remove("subscribe--input-error");
    subscriptionMessage.classList.remove("subscribe--message-error");
    subscriptionMessage.innerText = "Thank you for subscribing";
    // Perform api call to subscribe
  } else {
    emailInput.classList.add("subscribe--input-error");
    subscriptionMessage.classList.add("subscribe--message-error");
    subscriptionMessage.innerText = "Please enter a valid email";
  }
});

function checkEmailValidity(inputField) {
  return typeof inputField.checkValidity === "function"
    ? inputField.checkValidity()
    : /\S+@\S+\.\S+/.test(inputField.value);
}
