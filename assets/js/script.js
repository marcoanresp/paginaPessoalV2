const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navContent = document.getElementById('navContent');

function applyTheme(theme) {
    const dark = theme === 'dark';
    root.dataset.theme = dark ? 'dark' : 'light';
    themeToggle.innerHTML = `<i class="fa-solid ${dark ? 'fa-sun' : 'fa-moon'}" aria-hidden="true"></i>`;
    themeToggle.setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
    try { localStorage.setItem('theme', root.dataset.theme); } catch { /* Storage may be disabled. */ }
}

let savedTheme = 'light';
try { savedTheme = localStorage.getItem('theme') || 'light'; } catch { /* Use default theme. */ }
applyTheme(savedTheme);
themeToggle.addEventListener('click', () => applyTheme(root.dataset.theme === 'light' ? 'dark' : 'light'));

// Tailwind provides CSS; native JavaScript handles the mobile menu.
let menuAnimation;
menuToggle.addEventListener('click', () => {
    if (menuAnimation) return;
    const opening = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(opening));
    navContent.classList.remove('hidden');
    const height = navContent.getBoundingClientRect().height;
    navContent.style.overflow = 'hidden';
    menuAnimation = navContent.animate(
        [{ height: `${opening ? 0 : height}px` }, { height: `${opening ? height : 0}px` }],
        { duration: matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 350, easing: 'ease' }
    );
    menuAnimation.onfinish = () => {
        navContent.classList.toggle('hidden', !opening);
        navContent.style.overflow = '';
        menuAnimation = undefined;
    };
});
