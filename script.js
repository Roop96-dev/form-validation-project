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
    var emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  $("#submitbutton").click(function () {
    var error = "";

    if ($("#name").val() == "") {
      error += "<p>Name field is empty</p>";
    }

    if ($("#email").val() == "") {
      error += "<p>Email field is empty</p>";
    }

    if ($("#phone").val() == "") {
      error += "<p>Phone field is empty</p>";
    }

    if ($("#password").val() == "") {
      error += "<p>Password field is empty</p>";
    }

    if ($("#confirmpassword").val() == "") {
      error += "<p>Confirm Password field is empty</p>";
    }

    if ($("#email").val() != "") {
      if (!isValidEmail($("#email").val())) {
        error += "<p>Email format is not correct</p>";
      }
    }

    if ($("#phone").val() != "") {
      if (isNaN($("#phone").val())) {
        error += "<p>Phone must be numbers only</p>";
      }

      if ($("#phone").val().length != 10) {
        error += "<p>Phone must be 10 digits</p>";
      }
    }

    if ($("#password").val() != "" && $("#confirmpassword").val() != "") {
      if ($("#password").val() != $("#confirmpassword").val()) {
        error += "<p>Passwords do not match</p>";
      }
    }

    if ($("#password").val() != "") {
      if ($("#password").val().length < 8) {
        error += "<p>Password must be at least 8 characters</p>";
      }
    }

    if (error == "") {
      $("#msg").html("Form submitted successfully");
      $("#msg").removeClass("error");
      $("#msg").addClass("success");
      $("#msg").show();

      $("#myForm")[0].reset();
    } else {
      $("#msg").html(error);
      $("#msg").removeClass("success");
      $("#msg").addClass("error");
      $("#msg").show();
    }
  });
});
