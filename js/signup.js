var userNameInput = document.getElementById("userName");
(emailInput = document.getElementById("email")),
  (passInput = document.getElementById("pass")),
  (addUserSignUp = document.getElementById("addUserSignUp"));


var allMails = [];

if (localStorage.getItem("user") != null) {
  allMails = JSON.parse(localStorage.getItem("user"));
}

function addUser() {
    if (validationUserName() == true && validationEmail() == true && validationPassword() == true) {
      var newEmail = emailInput.value;
  
      // Check for duplicate email
      if (!isDuplicateEmail(newEmail)) {
        var newUser = {
          userName: userNameInput.value,
          email: newEmail,
          password: passInput.value,
        };
        
        allMails.push(newUser);
        localStorage.setItem("user", JSON.stringify(allMails));

        // Display success message using SweetAlert
        Swal.fire({
          icon: "success",
          title: "You are logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        window.location.href = './index.html';

          clearForm();
      } else {
        // Display error message for duplicate email
        Swal.fire({
          icon: "error",
          title: "Email already exists",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }else{
      Swal.fire({
        icon: "error",
        title: "All inputs are required!"
      });
    }

  }
  
  function clearForm() {
    emailInput.value = "";
    passInput.value = "";
    userNameInput.value = "";
 }


  // Function to check for duplicate email
  function isDuplicateEmail(email) {
    return allMails.some(function (user) {
      return user.email === email;
    });
  }
  


function validationUserName() {
  var userName = userNameInput.value;
  var ragexUserName = /^[A-z]{1,30}$/;
  
    if (ragexUserName.test(userName) == true) {
    userNameInput.classList.remove("is-invalid");
    userNameInput.classList.add("is-valid");

    return true;
  } else {
    //invalid
    userNameInput.classList.add("is-invalid");
    userNameInput.classList.remove("is-valid");
    return false;
  }
}

function validationEmail() {
  var email = emailInput.value;
  var ragexmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (ragexmail.test(email) == true) {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");

    return true;
  } else {
    //invalid
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    return false;
  }
}
function validationPassword() {
  var pass = passInput.value;
  var ragexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (ragexPass.test(pass) == true) {
    passInput.classList.remove("is-invalid");
    passInput.classList.add("is-valid");

    return true;
  } else {
    //invalid
    passInput.classList.add("is-invalid");
    passInput.classList.remove("is-valid");
    return false;
  }
}
function togglePasswordVisibility() {
    var toggleBtn = document.getElementById("togglePassword");
  
    if (passInput.type === "password" ) {
      passInput.type = "text";
      toggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';

    } else {
      passInput.type = "password";
      toggleBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    }
  }
  


