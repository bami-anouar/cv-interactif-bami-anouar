// --- GESTION DU MENU (Simplifiée) ---
const externalBtn = document.getElementById('toggleSidebarBtn');
const wrapper = document.getElementById('wrapper');
const externalIcon = externalBtn ? externalBtn.querySelector('i') : null;

function toggleMenu() {
    wrapper.classList.toggle('toggled');

    // update aria
    if (externalBtn) {
        const expanded = wrapper.classList.contains('toggled');
        externalBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    }

    // Changement d'icône
    if (externalIcon) {
        if (wrapper.classList.contains('toggled')) {
            externalIcon.classList.replace('fa-bars', 'fa-times');
        } else {
            externalIcon.classList.replace('fa-times', 'fa-bars');
        }
    }
}

if (externalBtn) externalBtn.addEventListener('click', (e) => { e.preventDefault(); toggleMenu(); });

// Fermeture auto sur mobile au clic d'un lien
const navLinks = document.querySelectorAll('#sidebar .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768 && wrapper.classList.contains('toggled')) {
            wrapper.classList.remove('toggled');
            if (externalIcon) {
                externalIcon.classList.replace('fa-times', 'fa-bars');
            }
            if (externalBtn) externalBtn.setAttribute('aria-expanded', 'false');
        }
    });
});

// --- GESTION DU DARK MODE ---
const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        const enabled = body.classList.toggle('dark-mode');
        darkModeBtn.textContent = enabled ? '☀️' : '🌙';
        darkModeBtn.classList.toggle('btn-dark', !enabled);
        darkModeBtn.classList.toggle('btn-light', enabled);
        darkModeBtn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
    });
}
