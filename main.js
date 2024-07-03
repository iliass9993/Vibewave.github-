const items = document.querySelectorAll(".accordion button");
function toggleAccordion() {
  const itemstoggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }
  if (itemstoggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}
items.forEach((item) => item.addEventListener("click", toggleAccordion));

// JavaScript to handle modals
document.addEventListener("DOMContentLoaded", function () {
  const modalContainer = document.getElementById("modal-container");
  const loginModal = document.getElementById("login-modal");
  const registerModal = document.getElementById("register-modal");
  const btnLoginPopup = document.querySelector(".btnLogin-popup");
  const registerLink = document.getElementById("register-link");
  const loginLink = document.getElementById("login-link");

  btnLoginPopup.addEventListener("click", () => {
    modalContainer.style.display = "flex";
    loginModal.style.display = "block";
    registerModal.style.display = "none";
  });

  registerLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "none";
    registerModal.style.display = "block";
  });

  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    registerModal.style.display = "none";
    loginModal.style.display = "block";
  });

  window.addEventListener("click", (e) => {
    if (e.target == modalContainer) {
      modalContainer.style.display = "none";
    }
  });

  // Handle form submissions here (e.g., send data to server)
  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    // Handle login logic
    console.log("Login form submitted");
    modalContainer.style.display = "none";
  });

  document.getElementById("register-form").addEventListener("submit", (e) => {
    e.preventDefault();
    // Handle registration logic
    console.log("Register form submitted");
    modalContainer.style.display = "none";
  });
});
