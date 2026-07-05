const flag = "FLAG{hidden_signup_portal_found}";
const loginForm = document.querySelector("#loginForm");
const openSignup = document.querySelector("#openSignup");
const signupOverlay = document.querySelector("#signupOverlay");
const signupForm = document.querySelector("#signupForm");
const verification = document.querySelector("#verification");
const message = document.querySelector("#message");
const flagLine = document.querySelector("#flagLine");

loginForm.hidden = false;
openSignup.hidden = true;
signupOverlay.hidden = true;
verification.hidden = true;

function showVerification() {
  document.querySelector(".panel").hidden = true;
  signupOverlay.hidden = true;
  verification.hidden = false;
  message.textContent = "";
  flagLine.textContent = flag;
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "Access denied. No account found for those credentials.";
});

openSignup.addEventListener("click", () => {
  signupOverlay.hidden = false;
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("#newUser").value.trim();
  const password = document.querySelector("#newPass").value.trim();

  if (username && password) showVerification();
  else message.textContent = "Signup requires both fields.";
});
