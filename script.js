/*WYLACZANIE OKIENKA NA START*/
window.onload = function() {
  if (!modal.classList.contains("open")) {
    modal.style.display = "none";
  }
}

/*DZIALANIE OKIENKA I ANIMACJA*/
const contactButton = document.getElementById("kontakt");
const closeModalButton = document.getElementById("close-modal");

contactButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
    setTimeout(() => {
    modal.classList.add("open");
  }, 1);
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("open");
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}
