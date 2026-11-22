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
// Visionneuse d'images (captures des pages projet)
const shots = document.querySelectorAll('a[data-lightbox]');
if (shots.length) {
  const box = document.createElement('div');
  box.className = 'lightbox';
  box.hidden = true;
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.innerHTML = '<button type="button" aria-label="Fermer">×</button><img alt=""><p></p>';
  document.body.appendChild(box);
  const img = box.querySelector('img');
  const cap = box.querySelector('p');
  const close = () => { box.hidden = true; img.src = ''; };
  shots.forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const thumb = a.querySelector('img');
    img.src = a.getAttribute('href');
    img.alt = thumb ? thumb.alt : '';
    cap.textContent = thumb ? thumb.alt : '';
    box.hidden = false;
    box.querySelector('button').focus();
  }));
  box.addEventListener('click', e => { if (e.target !== img) close(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !box.hidden) close(); });
}
