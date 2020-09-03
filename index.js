// Mobile hamburger menu handling

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const mobileNavOverlay = document.getElementById("mobilenav-overlay");
const toCloseIconAnimation = document.getElementsByClassName(
  "animate-to-close"
);
const toHamburgerIconAnimation = document.getElementsByClassName(
  "animate-to-hamburger"
);

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

  for (animation of toCloseIconAnimation) {
    animation.beginElement();
  }
}

function closeMobileNav() {
  isMenuOpen = false;
  menuToggle.setAttribute("aria-expanded", isMenuOpen);
  menu.classList.remove("header--navigation-active");
  mobileNavOverlay.classList.remove("mobilenav--overlay-active");

  for (animation of toHamburgerIconAnimation) {
    animation.beginElement();
  }
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

// Testimonial Slider
const elTestimonials = Array.from(
  document.querySelectorAll(".testimonials--listitem")
);

let state = {
  photo: 0,
};

function send(event) {
  const elActives = document.querySelectorAll("[data-active]");

  Array.from(elActives).forEach((el) => {
    el.removeAttribute("data-active");
    if (el.type === "radio") el.removeAttribute("checked");
  });

  switch (event) {
    case "PREV":
      state.photo--;
      break;
    case "NEXT":
      state.photo++;
      break;
    default:
      if (isNaN(event)) break;
      state.photo = +event;
      break;
  }

  const len = elTestimonials.length;
  state.photo = ((state.photo % len) + len) % len;

  newElActives = document.querySelectorAll(`[data-key="${state.photo}"]`);
  Array.from(newElActives).forEach((el) => {
    el.setAttribute("data-active", true);
    if (el.type === "radio") el.setAttribute("checked", true);
  });
}

send(0);

setInterval(() => {
  send("NEXT");
}, 5000);

// Testimonial selector

const radios = document.querySelectorAll(`[type="radio"]`);
Array.from(radios).forEach((radioButton) => {
  radioButton.addEventListener("click", (event) => {
    const key = event.target.getAttribute("data-key");
    send(key);
  });
});
