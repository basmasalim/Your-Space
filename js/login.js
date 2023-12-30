var emailInput = document.getElementById('email');
var passInput = document.getElementById('pass');

if (localStorage.getItem("user") != null) {
    var allUsers = JSON.parse(localStorage.getItem("user")) || [];
}

function loginUser() {
    let users = {
      email: emailInput.value,
      password: passInput.value,
    };
    for (var i = 0; i < allUsers.length; i++) {
      if (
        allUsers[i].email == users.email &&
        allUsers[i].password == users.password
      ) {
        localStorage.setItem("userName", allUsers[i].userName);
        window.location.href = "./home.html";
        break;
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid login credentials",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }

function togglePasswordVisibility() {
    var toggleBtn = document.getElementById("togglePassword");

    if (passInput.type === "password") {
        passInput.type = "text";
        toggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
    } else {
        passInput.type = "password";
        toggleBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
}
