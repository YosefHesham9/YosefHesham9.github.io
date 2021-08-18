let menuButton = document.getElementById("toggle-button");
let menu = document.getElementById("toggle-menu");

menuButton.onclick = function () {
    menu.classList.toggle("toggle");
}