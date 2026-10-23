let lastFocusedEl = null;

async function openProjectModal(projectName) {
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("project-modal-body");
  const progressBar = document.getElementById("modal-progress-bar");

  lastFocusedEl = document.activeElement;

  // 1. Wysuń viewer (animacja na GPU)
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  if (progressBar) progressBar.style.transform = "scaleX(0)";

  // 2. Stan ładowania
  modalBody.innerHTML = '<div class="modal-loading"><i class="mdi mdi-loading mdi-spin"></i><span>Opening the grimoire…</span></div>';

  // fokus na przycisk zamknięcia (dostępność)
  modal.querySelector(".modal-close-btn")?.focus({ preventScroll: true });

  try {
    // 3. Pobierz plik HTML projektu
    const response = await fetch(`content/projects/${projectName}.html`);
    if (!response.ok) throw new Error("Document not found");

    const htmlContent = await response.text();
    modalBody.innerHTML = htmlContent; // sekcje wjeżdżą same dzięki CSS
    modalBody.scrollTop = 0;
  } catch (error) {
    modalBody.innerHTML = `
      <div class="modal-error">
        <i class="mdi mdi-alert-circle-outline"></i>
        <p>Could not load documentation file.</p>
      </div>
    `;
  }
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
    lastFocusedEl.focus({ preventScroll: true });
  }
}

// Pasek postępu czytania
document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("project-modal-body");
  const bar = document.getElementById("modal-progress-bar");
  if (!body || !bar) return;

  let ticking = false;
  body.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = body.scrollHeight - body.clientHeight;
        const p = max > 0 ? body.scrollTop / max : 0;
        bar.style.transform = `scaleX(${p})`;
        ticking = false;
      });
    },
    { passive: true },
  );
});

// Obsługa klawisza ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProjectModal();
});
