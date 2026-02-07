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

  $("#submitbutton").click(function () {
    var error = "";

    if ($("#name").val() == "") {
      error += "<p>Name field is required</p>";
    }

    if ($("#email").val() == "") {
      error += "<p>Email field is required</p>";
    } else {
      if (!isValidEmail($("#email").val())) {
        error += "<p>Email format is not correct</p>";
      }
    }

    if ($("#phone").val() == "") {
      error += "<p>Phone field is required</p>";
    } else {
      if (isNaN($("#phone").val())) {
        error += "<p>Phone must contain numbers only</p>";
      }

      if ($("#phone").val().length != 10) {
        error += "<p>Phone must be 10 digits</p>";
      }
    }

    if ($("#password").val() == "") {
      error += "<p>Password field is required</p>";
    } else {
      if ($("#password").val().length < 8) {
        error += "<p>Password must be at least 8 characters</p>";
      }
    }

    if ($("#confirmpassword").val() == "") {
      error += "<p>Confirm Password field is required</p>";
    } else {
      if ($("#password").val() != $("#confirmpassword").val()) {
        error += "<p>Passwords do not match</p>";
      }
    }

    if (error == "") {
      $("#msg").html("Form submitted successfully");
      $("#msg").attr("class", "success");
    } else {
      $("#msg").html(error);
      $("#msg").attr("class", "error");
    }
  });
});
