// Get the button element by its id
var button = document.getElementById("switch-button");

// Define a variable to store the current color mode
var mode = "light";

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Get the body element
  var body = document.body;

  // Get all the elements that contain text
  var textElements = document.querySelectorAll("h1,h2, h3, ul, li, p, span");

  // Check the current color mode
  if (mode === "light") {
    // Change the mode to dark
    mode = "dark";

    // Change the button text color to white
    button.style.color = "white";

    // Change the button border color to white
    button.style.borderColor = "white";

    // Change the button background color to black
    button.style.backgroundColor = "black";

    // Remove the button background image
    button.style.backgroundImage = "none";

    // Remove the button filter
    button.style.filter = "none";

    // Change the body background color to black
    body.style.backgroundColor = "black";

    // Change the text color to white for each element
    for (var i = 0; i < textElements.length; i++) {
      textElements[i].style.color = "white";
    }
  } else {
    // Change the mode to light
    mode = "light";

    // Change the button text color to black
    button.style.color = "black";

    // Change the button border color to black
    button.style.borderColor = "black";

    // Change the button background color to white
    button.style.backgroundColor = "white";

    // Remove the button background image
    button.style.backgroundImage = "none";

    // Remove the button filter
    button.style.filter = "none";

    // Change the body background color to white
    body.style.backgroundColor = "white";

    // Change the text color to black for each element
    for (var i = 0; i < textElements.length; i++) {
      textElements[i].style.color = "black";
    }
  }
});
