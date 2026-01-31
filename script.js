/** @format */

$(document).ready(function () {
  // Show and Hide Password
  $("#showPass").click(function () {
    var passType;

    passType = document.getElementById("password").type;

    if (passType == "password") {
      document.getElementById("password").type = "text";
      $("#showPass").text("Hide");
    } else {
      document.getElementById("password").type = "password";
      $("#showPass").text("Show");
    }
  });

  // Form Submit
  $("#myForm").submit(function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^[0-9]{10}$/;
    var passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;

    $("#msg").hide();

    // Name validation
    if (name == "") {
      showMessage("Name is required", "error");
      return;
    }

    // Email validation
    if (email == "" || !emailPattern.test(email)) {
      showMessage("Enter a valid email", "error");
      return;
    }

    // Phone validation
    if (phone == "" || !phonePattern.test(phone)) {
      showMessage("Phone number must be 10 digits", "error");
      return;
    }

    // Password validation
    if (password == "" || !passwordPattern.test(password)) {
      showMessage(
        "Password must have uppercase, lowercase, number and 8 characters",
        "error",
      );
      return;
    }

    // Success message
    showMessage("Form submitted successfully", "success");

    document.getElementById("myForm").reset();
    $("#showPass").text("Show");
  });

  // Message function
  function showMessage(message, type) {
    $("#msg").removeClass();
    $("#msg").addClass(type);
    $("#msg").text(message);
    $("#msg").show();
  }
});
