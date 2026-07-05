const flag = "FLAG{local_storage_is_not_a_secret}";
const form = document.querySelector("#loginForm");
const dashboard = document.querySelector("#dashboard");
const message = document.querySelector("#message");
const flagLine = document.querySelector("#flagLine");

// Developer mistake: the page trusts a value that users can edit in DevTools.
localStorage.setItem("role", localStorage.getItem("role") || "guest");

function showDashboard() {
  form.hidden = true;
  dashboard.hidden = false;
  message.textContent = "";
  flagLine.textContent = `Resolved note: ${flag}`;
}

if (localStorage.getItem("role") === "analyst") {
  showDashboard();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("#user").value.trim();
  const password = document.querySelector("#pass").value;

  if (username === "analyst" && password === "desk123") {
    localStorage.setItem("role", "analyst");
    showDashboard();
  } else {
    message.textContent = "Login failed. Hint: check what the browser stores for this site.";
  }
});
