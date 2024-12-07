// Objeto de Traduções
const translations = {
    en: {
        "page-title": "LimeMarine - Commissions",
        "form-button": "Form",
        "sfw-button": "SFW Art",
        "nsfw-button": "NSFW Art",
        "sfw-title": "SFW Art",
        "sfw-description": "Here are examples of SFW art.",
        "nsfw-title": "NSFW Art",
        "nsfw-description": "Here are examples of NSFW art.",
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
        "form-button": "Formulário",
        "sfw-button": "Arte SFW",
        "nsfw-button": "Arte NSFW",
        "sfw-title": "Arte SFW",
        "sfw-description": "Aqui estão exemplos de arte SFW.",
        "nsfw-title": "Arte NSFW",
        "nsfw-description": "Aqui estão exemplos de arte NSFW.",
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
    themeToggleButton.textContent =
        document.body.classList.contains("dark-mode")
            ? "Alterar para Tema Claro"
            : "Alterar Tema";
});

// Alternância de Idioma
const languageToggleButton = document.getElementById("language-toggle");
let currentLanguage = "en";  // Idioma inicial é o inglês
languageToggleButton.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "pt" : "en";
    updateLanguage(currentLanguage);
    languageToggleButton.textContent =
        currentLanguage === "en" ? "Alterar para Português" : "Switch to English";
});

function updateLanguage(lang) {
    document.querySelectorAll("[data-lang-key]").forEach(element => {
        const key = element.getAttribute("data-lang-key");
        element.textContent = translations[lang][key];
    });
}

// Atualiza a página para o idioma inicial (inglês)
updateLanguage("en");
