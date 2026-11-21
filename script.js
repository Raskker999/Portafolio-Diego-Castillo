// Menu mobile
const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
if (btn && menu) {
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}
// Bouton retour en haut
const toTop = document.querySelector('.totop');
if (toTop) {
  addEventListener('scroll', () => toTop.classList.toggle('show', scrollY > 500), { passive: true });
}
