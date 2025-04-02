document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.querySelector(".theme-toggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    themeToggleBtn.textContent = "Light Theme";
  }

  themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
      themeToggleBtn.textContent = "Light Theme";
    } else {
      localStorage.setItem("theme", "light");
      themeToggleBtn.textContent = "Dark Theme";
    }
  });
});
