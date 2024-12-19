function validatePassword() {
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (password === "DEC2024") {
    window.location.href = "thankyou.html";
  } else {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Incorrect password. Please try again!";
  }
}
