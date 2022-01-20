var submit = document.getElementById("submit");
var fullNameJson;
var dateJson;
var emailJson;
var passJson;
var alertbox = /** @class */ (function () {
  function alertbox() {}
  alertbox.prototype.show = function (str) {
    alert(str);
  };
  return alertbox;
})();
submit.addEventListener("click", function create_account() {
  var name = document.getElementById("name");
  var date = document.getElementById("date");
  var email = document.getElementById("email");
  var pass = document.getElementById("pass");
  var pass1 = document.getElementById("pass1");
  var objAlertBox = new alertbox();
  if (name.value.length == 0) {
    name.classList.replace("inputContainer", "incorrectInput");
    console.warn("Enter Full Name");
  } else {
    fullNameJson = name.value;
    name.classList.replace("incorrectInput", "inputContainer");
  }
  if (date.value.length == 0) {
    date.classList.replace("inputContainer", "incorrectInput");
    console.warn("Enter Date");
  } else {
    date.classList.replace("incorrectInput", "inputContainer");
    dateJson = date.value;
  }
  if (email.value.length == 0) {
    email.classList.replace("inputContainer", "incorrectInput");
    console.warn("Enter Email");
  } else {
    email.classList.replace("incorrectInput", "inputContainer");
    emailJson = email.value;
  }
  if (pass.value.length == 0) {
    pass.classList.replace("inputContainer", "incorrectInput");
  } else {
    pass.classList.replace("incorrectInput", "inputContainer");
  }
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  if (
    pass.value.match(lowerCaseLetters) &&
    pass.value.match(upperCaseLetters) &&
    pass.value.match(numbers) &&
    pass.value.length >= 8
  ) {
    pass.classList.replace("incorrectInput", "inputContainer");
  } else {
    pass.classList.replace("inputContainer", "incorrectInput");
  }
  if (pass.value == pass1.value) {
    pass.classList.replace("incorrectInput", "inputContainer");
    passJson = pass.value;
  } else {
    pass.classList.replace("inputContainer", "incorrectInput");
    objAlertBox.show("Password did not match");
  }
  if (
    fullNameJson.length != 0 &&
    dateJson.length != 0 &&
    emailJson.length != 0 &&
    passJson.length != 0
  ) {
    var data = {
      name: fullNameJson,
      date: dateJson,
      email: emailJson,
      password: passJson,
    };
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then(function (result) {
        return result.json();
      })
      .then(function (jsonformat) {
        return console.log(jsonformat);
      });
    objAlertBox.show("Account successfully created !!!");
  }
});
