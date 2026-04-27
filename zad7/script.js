// Numer indeksu: 68037

document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) =>
      response.ok ? response.json() : Promise.reject("Błąd JSON"),
    )
    .then((data) => {
      const skillsList = document.getElementById("skills-list");
      data.umiejetnosci.forEach((skill) => {
        const li = document.createElement("li");
        li.textContent = skill;
        if (skillsList) skillsList.appendChild(li);
      });

      const projectsList = document.getElementById("projects-list");
      data.projekty.forEach((projekt) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${projekt.nazwa}</strong> - ${projekt.opis}`;
        if (projectsList) projectsList.appendChild(li);
      });
    })
    .catch((err) => console.error(err));

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

  const noteInput = document.getElementById("note-input");
  const addNoteBtn = document.getElementById("add-note-btn");
  const notesList = document.getElementById("notes-list");

  function getNotes() {
    const notes = localStorage.getItem("cv_notes_68037");
    return notes ? JSON.parse(notes) : [];
  }

  function saveNotes(notes) {
    localStorage.setItem("cv_notes_68037", JSON.stringify(notes));
  }

  function renderNotes() {
    if (!notesList) return;
    notesList.innerHTML = "";
    const notes = getNotes();

    notes.forEach((note, index) => {
      const li = document.createElement("li");
      li.textContent = note;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Usuń";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = () => {
        const currentNotes = getNotes();
        currentNotes.splice(index, 1);
        saveNotes(currentNotes);
        renderNotes();
      };

      li.appendChild(deleteBtn);
      notesList.appendChild(li);
    });
  }

  if (addNoteBtn && noteInput) {
    addNoteBtn.addEventListener("click", () => {
      const text = noteInput.value.trim();
      if (text !== "") {
        const notes = getNotes();
        notes.push(text);
        saveNotes(notes);
        noteInput.value = "";
        renderNotes();
      }
    });
  }

  renderNotes();

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
        document.getElementById("error-imie").textContent = "Błąd";
        isValid = false;
      } else if (hasNumbers.test(imie)) {
        document.getElementById("error-imie").textContent = "Błąd";
        isValid = false;
      }
      if (nazwisko === "") {
        document.getElementById("error-nazwisko").textContent = "Błąd";
        isValid = false;
      } else if (hasNumbers.test(nazwisko)) {
        document.getElementById("error-nazwisko").textContent = "Błąd";
        isValid = false;
      }
      if (email === "") {
        document.getElementById("error-email").textContent = "Błąd";
        isValid = false;
      } else if (!emailRegex.test(email)) {
        document.getElementById("error-email").textContent = "Błąd";
        isValid = false;
      }
      if (wiadomosc === "") {
        document.getElementById("error-wiadomosc").textContent = "Błąd";
        isValid = false;
      }

      if (isValid) {
        document.getElementById("success-msg").style.display = "block";
        form.reset();
      }
    });
  }
});
