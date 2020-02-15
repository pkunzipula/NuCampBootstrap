const soManyFlavors = document.querySelectorAll("input[name='iceCreamFlavor']");
soManyFlavors.forEach(flavor => {
  flavor.addEventListener("click", function(e) {
    console.log(e.target.value, e.target.checked);
  });
});
