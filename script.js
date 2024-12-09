
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

// Exibição de Galerias
const sfwButton = document.getElementById("sfw-art-button");
const nsfwButton = document.getElementById("nsfw-art-button");

const sfwGallery = document.getElementById("sfw-gallery");
const nsfwGallery = document.getElementById("nsfw-gallery");

sfwButton.addEventListener("click", () => {
    // Fecha a galeria NSFW com uma transição suave
    if (nsfwGallery.classList.contains("expanded")) {
        nsfwGallery.classList.remove("expanded");
        nsfwButton.textContent = "Show NSFW Art";
    }

    // Usa um atraso para abrir a galeria SFW após fechar a NSFW
    setTimeout(() => {
        if (!sfwGallery.classList.contains("expanded")) {
            sfwGallery.classList.add("expanded");
            sfwButton.textContent = "Hide SFW Art";
        } else {
            sfwGallery.classList.remove("expanded");
            sfwButton.textContent = "Show SFW Art";
        }
    }, 300); // Sincroniza com a duração da transição no CSS
});

nsfwButton.addEventListener("click", () => {
    // Fecha a galeria SFW com uma transição suave
    if (sfwGallery.classList.contains("expanded")) {
        sfwGallery.classList.remove("expanded");
        sfwButton.textContent = "Show SFW Art";
    }

    // Usa um atraso para abrir a galeria NSFW após fechar a SFW
    setTimeout(() => {
        if (!nsfwGallery.classList.contains("expanded")) {
            nsfwGallery.classList.add("expanded");
            nsfwButton.textContent = "Hide NSFW Art";
        } else {
            nsfwGallery.classList.remove("expanded");
            nsfwButton.textContent = "Show NSFW Art";
        }
    }, 300); // Sincroniza com a duração da transição no CSS
});
