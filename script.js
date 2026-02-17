/** @format */

$(document).ready(function () {
  $("#togglePassword").click(function () {
    if ($(this).is(":checked")) {
      $("#password").attr("type", "text");
      $("#confirmpassword").attr("type", "text");
    } else {
      $("#password").attr("type", "password");
      $("#confirmpassword").attr("type", "password");
    }
  });

  function isValidEmail(email) {
    var pattern = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }

  $("#myForm").submit(function (e) {
    var error = "";

    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var phone = $("#phone").val().trim();
    var password = $("#password").val();
    var confirmpassword = $("#confirmpassword").val();

    if (name == "") {
      error += "<p>Name field is required</p>";
    }

    if (email == "") {
      error += "<p>Email field is required</p>";
    } else if (!isValidEmail(email)) {
      error += "<p>Email format is not correct</p>";
    }

    var phonePattern = /^[0-9]{10}$/;

    if (phone == "") {
      error += "<p>Phone field is required</p>";
    } else if (!phonePattern.test(phone)) {
      error += "<p>Phone must be exactly 10 digits</p>";
    }

    if (password == "") {
      error += "<p>Password field is required</p>";
    } else if (password.length < 8) {
      error += "<p>Password must be at least 8 characters</p>";
    }

    if (confirmpassword == "") {
      error += "<p>Confirm Password field is required</p>";
    } else if (password !== confirmpassword) {
      error += "<p>Passwords do not match</p>";
    }

    if (error !== "") {
      e.preventDefault();
      $("#msg").html(error);
      $("#msg").removeClass("success").addClass("error");
    } else {
      $("#msg").html("Form submitted successfully");
      $("#msg").removeClass("error").addClass("success");

      this.reset();
    }
  });
});
