class ShowtimeNavbar extends HTMLElement {
  connectedCallback() {
    fetch("navbar.html")
      .then((response) => {
        if (!response.ok) throw new Error("Nie można załadować paska nawigacji");
        return response.text();
      })
      .then((html) => {
        this.innerHTML = html;
      })
      .catch((error) => console.error("Błąd ładowania paska nawigacji:", error));
  }
}

customElements.define("showtime-navbar", ShowtimeNavbar);

// Teksty maskotki ShowTime
const foxQuotes = [
  "Siema! Jestem ShowTime 🦊 Witam w moim hubie!",
  "Kliknij poniżej, żeby zobaczyć projekty!",
  "Pst... sprawdzasz wtyczkę QuickTag LazyMod?",
  "Kodowanie z AI idzie dzisiaj całkiem sprawnie! 🚀",
  "Rozgość się i przetestuj moje narzędzia!",
];

function toggleFoxBubble() {
  const bubble = document.getElementById("fox-bubble");
  if (!bubble) return;

  const randomQuote = foxQuotes[Math.floor(Math.random() * foxQuotes.length)];
  bubble.innerText = randomQuote;
  bubble.classList.remove("hidden");

  setTimeout(() => {
    bubble.classList.add("hidden");
  }, 4500);
}
