// Get the "Back to top" button element
const backButton = document.getElementById("back-to-top-button");

// Add a click event listener to the button
backButton.addEventListener("click", () => {
  // Scroll smoothly to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
