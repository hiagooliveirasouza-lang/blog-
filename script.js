    // ==========================================
// Sistema de Imagens Clicáveis (Modal)
// ==========================================

const clickableImages = document.querySelectorAll(".clickable-img");
const modal = document.getElementById("info-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeModalBtn = document.getElementById("close-modal");

clickableImages.forEach(img => {
    img.addEventListener("click", () => {
        modalImg.src = img.src;
        modalImg.alt = img.alt;

        modalTitle.textContent = img.dataset.title;
        modalDesc.textContent = img.dataset.desc;

        modal.classList.remove("hidden");
        modal.classList.add("flex");

        document.body.style.overflow = "hidden";
    });
});

function closeModal() {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
}

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});