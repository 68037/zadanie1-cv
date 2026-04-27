// Numer indeksu: 68037

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

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    const hasNumbers = /\d/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const imie = document.getElementById("imie").value.trim();
    const nazwisko = document.getElementById("nazwisko").value.trim();
    const email = document.getElementById("email").value.trim();
    const wiadomosc = document.getElementById("wiadomosc").value.trim();

    document
      .querySelectorAll(".error-msg")
      .forEach((el) => (el.textContent = ""));
    document.getElementById("success-msg").style.display = "none";

    if (imie === "") {
      document.getElementById("error-imie").textContent =
        "Pole imię jest wymagane.";
      isValid = false;
    } else if (hasNumbers.test(imie)) {
      document.getElementById("error-imie").textContent =
        "Imię nie może zawierać cyfr.";
      isValid = false;
    }

    if (nazwisko === "") {
      document.getElementById("error-nazwisko").textContent =
        "Pole nazwisko jest wymagane.";
      isValid = false;
    } else if (hasNumbers.test(nazwisko)) {
      document.getElementById("error-nazwisko").textContent =
        "Nazwisko nie może zawierać cyfr.";
      isValid = false;
    }

    if (email === "") {
      document.getElementById("error-email").textContent =
        "Pole e-mail jest wymagane.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("error-email").textContent =
        "Podaj poprawny adres e-mail (np. test@test.pl).";
      isValid = false;
    }

    if (wiadomosc === "") {
      document.getElementById("error-wiadomosc").textContent =
        "Pole wiadomość jest wymagane.";
      isValid = false;
    }

    if (isValid) {
      document.getElementById("success-msg").style.display = "block";
      form.reset();
    }
  });
});
