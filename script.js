
// script.js - Interatividades do Blog

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efeito Dinâmico no Header ao rolar a página
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            // Quando rolar para baixo, adiciona uma borda sutil e aumenta o efeito de desfoque
            header.classList.add("shadow-xs", "border-indigo-100/50");
            header.classList.remove("border-slate-100");
        } else {
            // Volta ao estado original no topo
            header.classList.remove("shadow-xs", "border-indigo-100/50");
            header.classList.add("border-slate-100");
        }
    });

    // 2. Interatividade do Botão de Newsletter
    // Procura pelo botão com o texto de assinatura
    const newsletterBtn = document.querySelector("header a:last-child");

    if (newsletterBtn) {
        newsletterBtn.addEventListener("click", (event) => {
            event.preventDefault(); // Evita que a página recarregue
            
            const email = prompt("Digite seu melhor e-mail para receber os insights do amanhã:");
            
            if (email) {
                // Validação super simples de formato de e-mail
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                
                if (emailRegex.test(email)) {
                    alert(`🚀 Excelente escolha! O e-mail (${email}) foi inserido na nossa lista de transmissão para o futuro.`);
                } else {
                    alert("❌ Hum, esse formato de e-mail parece incorreto. Tente novamente!");
                }
            }
        });
    }

    // 3. Simulação de cliques nos artigos do Feed
    const articleLinks = document.querySelectorAll("article h1 a, article h3 a");
    
    articleLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const tituloArtigo = link.innerText;
            console.log(`[Blog Log]: Navegando para o artigo -> ${tituloArtigo}`);
            alert(`🔗 Conexão estabelecida! Você seria redirecionado para a página dedicada do artigo:\n"${tituloArtigo}"`);
        });
    });
});