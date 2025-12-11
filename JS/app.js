function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById("toggle-btn");

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        btn.textContent = "Switch to Light Mode";
    } else {
        btn.textContent = "Switch to Dark Mode";
    }
}
