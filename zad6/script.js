// Numer indeksu: 68037

document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Błąd sieci lub pliku JSON");
      }
      return response.json();
    })
    .then((data) => {
      const skillsList = document.getElementById("skills-list");
      data.umiejetnosci.forEach((skill) => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
      });

      const projectsList = document.getElementById("projects-list");
      data.projekty.forEach((projekt) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${projekt.nazwa}</strong> - ${projekt.opis}`;
        projectsList.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Błąd podczas pobierania JSON:", error);
      document.getElementById("skills-list").innerHTML =
        "<li style='color:red;'>Nie udało się załadować danych.</li>";
    });

  const themeBtn = document.getElementById("theme-btn");
  const themeStylesheet = document.getElementById("theme-stylesheet");
  const toggleBtn = document.getElementById("toggle-btn");
  const projektySection = document.getElementById("sekcja-projekty");

  if (themeBtn && themeStylesheet) {
    themeBtn.addEventListener("click", () => {
      if (themeStylesheet.getAttribute("href") === "red.css") {
        themeStylesheet.setAttribute("href", "green.css");
        themeBtn.textContent = "Zmień motyw na czerwony";
      } else {
        themeStylesheet.setAttribute("href", "red.css");
        themeBtn.textContent = "Zmień motyw na zielony";
      }
    });
  }

  if (toggleBtn && projektySection) {
    toggleBtn.addEventListener("click", () => {
      if (projektySection.style.display === "none") {
        projektySection.style.display = "block";
        toggleBtn.textContent = "Ukryj sekcję Projekty";
      } else {
        projektySection.style.display = "none";
        toggleBtn.textContent = "Pokaż sekcję Projekty";
      }
    });
  }

  const form = document.getElementById("contact-form");

  if (form) {
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
          "Podaj poprawny adres e-mail.";
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
  }
});
