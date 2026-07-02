

    // 4. Sistema de Curtidas (Like System) com persistência local
    const likeButtons = document.querySelectorAll(".like-btn");

    likeButtons.forEach((btn, index) => {
        const countSpan = btn.querySelector(".like-count");
        const iconSpan = btn.querySelector(".like-icon");
        const storageKey = `blog_post_liked_${index}`;

        // Verifica se o usuário já curtiu este post anteriormente
        let hasLiked = localStorage.getItem(storageKey) === "true";
        let currentLikes = parseInt(countSpan.innerText) || 0;

        // Se já curtiu, atualiza o visual para o estado ativo
        if (hasLiked) {
            iconSpan.innerText = "❤️";
            btn.classList.add("text-rose-500", "font-bold");
            btn.classList.remove("text-slate-400");
        }

        btn.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation(); // Evita disparar o clique do card

            if (hasLiked) {
                // Descurtir
                currentLikes--;
                hasLiked = false;
                iconSpan.innerText = "🤍";
                btn.classList.remove("text-rose-500", "font-bold");
                btn.classList.add("text-slate-400");
            } else {
                // Curtir
                currentLikes++;
                hasLiked = true;
                iconSpan.innerText = "❤️";
                btn.classList.add("text-rose-500", "font-bold");
                btn.classList.remove("text-slate-400");

                // Animação rápida de pulso no clique
                btn.classList.add("scale-110");
                setTimeout(() => btn.classList.remove("scale-110"), 150);
            }

            // Atualiza o texto e salva o estado no navegador
            countSpan.innerText = currentLikes;
            localStorage.setItem(storageKey, hasLiked);
        });
    });