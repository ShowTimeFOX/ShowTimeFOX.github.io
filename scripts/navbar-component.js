const foxQuotes = [
  "Hey there! I'm ShowTime 🦊 Welcome to my hub!",
  "Click below to check out the projects!",
  "Psst... are you testing the QuickTag LazyMod plugin?",
  "Coding with AI is going pretty smooth today! 🚀",
  "Make yourself at home and try out my tools!",
];

class ShowtimeNavbar extends HTMLElement {
  connectedCallback() {
    fetch("navbar.html")
      .then((response) => {
        if (!response.ok) throw new Error("Nie można załadować paska nawigacji");
        return response.text();
      })
      .then((html) => {
        this.innerHTML = html;
        // Inicjalizujemy filtrowanie kliknięć po załadowaniu HTML
        this.initFoxClickFilter();
      })
      .catch((error) => console.error("Błąd ładowania paska nawigacji:", error));
  }

  initFoxClickFilter() {
    const modelViewer = this.querySelector("model-viewer");
    const bubble = this.querySelector(".fox-bubble");

    if (!modelViewer) return;

    modelViewer.addEventListener("load", () => {
      modelViewer.classList.add("ready");
    });

    // 1. OBSŁUGA KLIKNIĘCIA (To już masz - zostaje bez zmian)
    modelViewer.addEventListener("click", (event) => {
      const hit = modelViewer.positionAndNormalFromPoint(event.clientX, event.clientY);
      if (hit) {
        this.toggleFoxBubble(bubble);
      } else {
        if (bubble) bubble.classList.add("hidden");
      }
    });

    // 2. NOWOŚĆ: ZMIANA KURSORA NA "POINTER" PO NAJECHANIU NA POSTAĆ
    modelViewer.addEventListener("mousemove", (event) => {
      // Sprawdzamy czy pod kursorem znajduje się model 3D
      const hit = modelViewer.positionAndNormalFromPoint(event.clientX, event.clientY);

      if (hit) {
        // Kursor nad lisem -> Zmień na łapkę (pointer)
        modelViewer.style.cursor = "pointer";
      } else {
        // Kursor nad pustym tłem -> Wróć do domyślnego stanu komponentu
        modelViewer.style.cursor = "";
      }
    });

    // Zamknięcie dymku po kliknięciu gdziekolwiek indziej na stronie
    document.addEventListener("click", (e) => {
      if (bubble && !modelViewer.contains(e.target) && !bubble.contains(e.target)) {
        bubble.classList.add("hidden");
      }
    });
  }

  toggleFoxBubble(bubble) {
    if (!bubble) return;

    // Jeśli dymek jest już otwarty, ponowne kliknięcie w lisa go schowa
    if (!bubble.classList.contains("hidden")) {
      bubble.classList.add("hidden");
      return;
    }

    // Losowanie nowego angielskiego cytatu
    const randomQuote = foxQuotes[Math.floor(Math.random() * foxQuotes.length)];
    bubble.innerText = randomQuote;
    bubble.classList.remove("hidden");
  }
}

customElements.define("showtime-navbar", ShowtimeNavbar);
