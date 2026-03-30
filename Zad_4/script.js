//indeks: 68037

document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("theme-btn");
  const themeStylesheet = document.getElementById("theme-stylesheet");

  const toggleBtn = document.getElementById("toggle-btn");
  const projektySection = document.getElementById("sekcja-projekty");

  themeBtn.addEventListener("click", () => {
    if (themeStylesheet.getAttribute("href") === "red.css") {
      themeStylesheet.setAttribute("href", "green.css");
      themeBtn.textContent = "Zmień motyw na czerwony";
    } else {
      themeStylesheet.setAttribute("href", "red.css");
      themeBtn.textContent = "Zmień motyw na zielony";
    }
  });

  toggleBtn.addEventListener("click", () => {
    if (projektySection.style.display === "none") {
      projektySection.style.display = "block";
      toggleBtn.textContent = "Ukryj sekcję Projekty";
    } else {
      projektySection.style.display = "none";
      toggleBtn.textContent = "Pokaż sekcję Projekty";
    }
  });
});
