// ==========================================
// 4. Sistema de Curtidas (Like System)
// ==========================================
const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((btn, index) => {
    const countSpan = btn.querySelector(".like-count");
    const iconSpan = btn.querySelector(".like-icon");
    const storageKey = `blog_post_liked_${index}`;

    let hasLiked = localStorage.getItem(storageKey) === "true";
    let currentLikes = parseInt(countSpan.innerText) || 0;

    if (hasLiked) {
        iconSpan.innerText = "❤️";
        btn.classList.add("text-rose-500", "font-bold");
        btn.classList.remove("text-slate-400");
    }

    btn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (hasLiked) {
            currentLikes--;
            hasLiked = false;
            iconSpan.innerText = "🤍";
            btn.classList.remove("text-rose-500", "font-bold");
            btn.classList.add("text-slate-400");
        } else {
            currentLikes++;
            hasLiked = true;
            iconSpan.innerText = "❤️";
            btn.classList.add("text-rose-500", "font-bold");
            btn.classList.remove("text-slate-400");

            btn.classList.add("scale-110");
            setTimeout(() => btn.classList.remove("scale-110"), 150);
        }

        countSpan.innerText = currentLikes;
        localStorage.setItem(storageKey, hasLiked);
    });
});

// ==========================================
// 5. Sistema Dinâmico de Imagens Clicáveis (Modal)
// ==========================================
const clickableImages = document.querySelectorAll('.clickable-img');
const modal = document.getElementById('info-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeModalBtn = document.getElementById('close-modal');

// Função para abrir o modal preenchendo as informações corretas
clickableImages.forEach(img => {
    img.addEventListener('click', () => {
        const title = img.getAttribute('data-title');
        const desc = img.getAttribute('data-desc');
        const src = img.getAttribute('src');

        // injeta os dados no HTML interno do modal
        modalImg.src = src;
        modalImg.alt = title;
        modalTitle.innerText = title;
        modalDesc.innerText = desc;

        // Troca o utilitário hidden para flex do Tailwind para mostrar na tela
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.classList.add('overflow-hidden'); // Trava o scroll do fundo
    });
});

// Função para fechar o Modal
const closeModal = () => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden'); // Libera o scroll
};

// Fecha no botão X
closeModalBtn.addEventListener('click', closeModal);

// Fecha se clicar na região escura fora da caixinha de informações
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Fecha se o usuário apertar a tecla ESC do teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});