//your JS code here. If required.
const form = document.querySelector("form");
const submitButton = document.getElementById("submit");
const existingButton = document.getElementById("existing");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const isRemembered = document.getElementById("checkbox").checked;

  if (isRemembered) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert(`Logged in as ${username}`);

  existingButton.style.display = "none"; // Hide existing button after login
});

// Check for existing details and show button if found
const savedUsername = localStorage.getItem("username");
if (savedUsername) {
  existingButton.style.display = "block";
  existingButton.addEventListener("click", () => {
    alert(`Logged in as ${savedUsername}`);
  });
}
