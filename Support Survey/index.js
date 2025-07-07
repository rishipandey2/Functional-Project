const closeBtn = document.getElementById("closeBtn");
const card = document.getElementById("supportCard");

closeBtn.addEventListener("click", () => {
  card.classList.add("slide-up");

  // Remove card from DOM after animation ends
  card.addEventListener("animationend", () => {
    card.remove();
  });
});
