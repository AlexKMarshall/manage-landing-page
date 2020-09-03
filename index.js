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
