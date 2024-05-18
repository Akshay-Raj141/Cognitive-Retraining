document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.getElementById("training-dropdown");
    var dropdownMenu = dropdown.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseover", function() {
        dropdownMenu.classList.add("show");
    });

    dropdownMenu.addEventListener("mouseleave", function() {
        dropdownMenu.classList.remove("show");
    });
});
