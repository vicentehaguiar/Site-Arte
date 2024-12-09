// Traduções
const translations = {
    en: {
        "page-title": "LimeMarine - Commissions",
        "sfw-button": "Show SFW Art",
        "nsfw-button": "Show NSFW Art",
        "theme-toggle": "Change Theme",
        "sfw-title": "SFW Art",
        "nsfw-title": "NSFW Art",
        "form-title": "Commission Form",
        "name-label": "Name:",
        "email-label": "Email:",
        "type-label": "Type of Art:",
        "option-sfw": "SFW",
        "option-nsfw": "NSFW",
        "description-label": "Description:",
        "submit-button": "Submit Request"
    },
    pt: {
        "page-title": "LimeMarine - Comissões",
        "sfw-button": "Mostrar Arte SFW",
        "nsfw-button": "Mostrar Arte NSFW",
        "theme-toggle": "Alterar Tema",
        "sfw-title": "Arte SFW",
        "nsfw-title": "Arte NSFW",
        "form-title": "Formulário de Comissões",
        "name-label": "Nome:",
        "email-label": "E-mail:",
        "type-label": "Tipo de Arte:",
        "option-sfw": "SFW",
        "option-nsfw": "NSFW",
        "description-label": "Descrição:",
        "submit-button": "Enviar Pedido"
    }
};

// Alternância de Tema
const themeToggleButton = document.getElementById("theme-toggle");
themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Alternância de Idioma
const languageToggleButton = document.getElementById("language-toggle");
let currentLanguage = "en";

languageToggleButton.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "pt" : "en";
    updateLanguage(currentLanguage);
    languageToggleButton.textContent = 
        currentLanguage === "en" ? "Switch to Portuguese" : "Mudar para Inglês";
});

function updateLanguage(lang) {
    document.querySelectorAll("[data-lang-key]").forEach(element => {
        const key = element.getAttribute("data-lang-key");
        element.textContent = translations[lang][key];
    });
}
// Alterna a visibilidade das seções de arte
document.getElementById('sfw-art-button').addEventListener('click', () => {
    document.getElementById('sfw-art').classList.add('active');
    document.getElementById('nsfw-art').classList.remove('active');
});

document.getElementById('nsfw-art-button').addEventListener('click', () => {
    document.getElementById('nsfw-art').classList.add('active');
    document.getElementById('sfw-art').classList.remove('active');
});

// Mostrar o modal ao clicar no botão de login
document.getElementById('login-modal').style.display = 'block';
// Alterna a visibilidade das seções de arte
document.getElementById('sfw-art-button').addEventListener('click', () => {
    document.getElementById('sfw-art').classList.add('active');
    document.getElementById('nsfw-art').classList.remove('active');
});

document.getElementById('nsfw-art-button').addEventListener('click', () => {
    document.getElementById('nsfw-art').classList.add('active');
    document.getElementById('sfw-art').classList.remove('active');
});

// Mostrar o modal ao clicar no botão de login
function openLoginModal() {
    const modal = document.getElementById('login-modal');
    modal.style.display = 'block';
}

// Fechar o modal quando o usuário clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('login-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
