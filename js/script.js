// script.js

const themeToggleButton = document.getElementById("theme-toggle");

themeToggleButton.addEventListener("click", () => {
    // Comprobamos si el tema actual es 'dark'
    if (document.documentElement.classList.contains("dark")) {
        // Si está en dark mode, lo cambiamos a light mode
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        // Si está en light mode, lo cambiamos a dark mode
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
});

// Al cargar la página, verificamos si el usuario tiene configurado un tema
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}
