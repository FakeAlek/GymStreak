let element = document.body;
let colorModeBTN = document.getElementById('colorModeIcon');
let color = JSON.parse(localStorage.getItem("colorTheme")); // String -> Boolean

function checkColor() {
    if (color == null) {
        color = true; // Default: dark mode
        colorModeBTN.setAttribute("name", "sunny");
    }

    if (color === true) {
        element.classList.add("dark-mode");
        element.classList.remove("white-mode");
        colorModeBTN.setAttribute("name", "sunny");
    } else {
        element.classList.add("white-mode");
        element.classList.remove("dark-mode");
        colorModeBTN.setAttribute("name", "moon");
    }
}
checkColor();

function switchColor() {
    color = !color;
    localStorage.setItem("colorTheme", JSON.stringify(color));
    checkColor();
}