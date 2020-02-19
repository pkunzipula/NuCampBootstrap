const soManyFlavors = document.querySelectorAll("input[name='iceCreamFlavor']");
soManyFlavors.forEach(flavor => {
  flavor.addEventListener("click", function(e) {
    console.log(e.target.value, e.target.checked);
  });
});


<!-- <script>
const siteTypeButtons = document.querySelectorAll(
  "label[data-site-type]"
);
siteTypeButtons[0].style.backgroundColor = "limegreen";

// function handleSiteTypeButtonClick(event) {
//   siteTypeButtons.forEach(button => {
//     button.style.backgroundColor = "";
//   });
//   event.currentTarget.style.backgroundColor = "limegreen";
// }

// siteTypeButtons.forEach(function(typeButton) {
//   typeButton.addEventListener("click", handleSiteTypeButtonClick);
// });

siteTypeButtons.forEach(function(typeButton) {
  typeButton.addEventListener("click", function(event) {
    siteTypeButtons.forEach(button => {
      button.style.backgroundColor = "";
    });
    event.currentTarget.style.backgroundColor = "limegreen";
  });
});
</script> -->

var timeout;

      // Listen for resize events
      window.addEventListener(
        "scroll",
        function(event) {
          if (scrollchecker.offsetTop < window.scrollY + 56) {
            masthead.classList.add("opaque");
          } else {
            masthead.classList.remove("opaque");
          }

          // If there's a timer, cancel it
          if (timeout) {
            window.cancelAnimationFrame(timeout);
          }

          // Setup the new requestAnimationFrame()
          timeout = window.requestAnimationFrame(function() {
            // Run our scroll functions
            console.log("debounced");
          });
        },
        false
      );