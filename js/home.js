//spinner-wrapper
const spinnerWrapperEL = document.querySelector(".spinner-wrapper");

window.addEventListener("load", () => {
  spinnerWrapperEL.style.opacity = "0";
});

setTimeout(() => {
  spinnerWrapperEL.style.display = "none";
}, 2500);

// type js
$(document).ready(function () {
  var typed = new Typed("#typed", {
    strings: ["Organize your chaos", "prioritize your peace", "Welcome to the world of productivity."],
    backSpeed: 100,
    typeSpeed: 100,
    loop: true,
    cursorChar: "|",
  });
});
/////////////////////////////////////////////////////////
function displayUserName() {
  var loggedInUserName = localStorage.getItem("userName");
  if (loggedInUserName) {
    var welcomeMessage = "Welcome, " + loggedInUserName + "!";
    document.getElementById("welcomeMessage").textContent = welcomeMessage;
  }
}

window.onload = function () {
  displayUserName();
};


function logoutUser() {
  localStorage.removeItem("userName");
  localStorage.removeItem("email");
  localStorage.removeItem("password");

  window.location.href = './index.html';
}

