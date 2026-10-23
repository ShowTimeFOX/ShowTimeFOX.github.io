const ageWarningDialog = document.querySelector("#age-warning");
const ageWarningLink = document.querySelector("[data-age-warning]");
const ageWarningCancel = document.querySelector("[data-age-warning-cancel]");

if (ageWarningDialog instanceof HTMLDialogElement && ageWarningLink instanceof HTMLAnchorElement) {
  ageWarningLink.addEventListener("click", (event) => {
    event.preventDefault();
    ageWarningDialog.showModal();
  });

  ageWarningCancel?.addEventListener("click", () => {
    ageWarningDialog.close();
  });

  ageWarningDialog.addEventListener("cancel", () => {
    ageWarningDialog.close();
  });

  ageWarningDialog.addEventListener("click", (event) => {
    if (event.target === ageWarningDialog) {
      ageWarningDialog.close();
    }
  });

  ageWarningDialog.querySelector(".age-warning-continue")?.addEventListener("click", () => {
    ageWarningDialog.close();
  });
}
