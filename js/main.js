// Мобильное меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

function toggleMenu(open) {
  nav.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
}

burger.addEventListener('click', () => toggleMenu(!nav.classList.contains('is-open')));
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => toggleMenu(false)));

// Просмотр фото в галерее
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('.card__zoom').forEach((button) => {
  button.addEventListener('click', () => {
    lightboxImg.src = button.dataset.full;
    lightboxImg.alt = button.querySelector('img').alt;
    lightbox.showModal();
  });
});
lightbox.querySelector('.lightbox__close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.close(); });

// Плавное появление блоков при прокрутке
const revealTargets = document.querySelectorAll('.section__head, .card, .step, .valera__photo, .valera__text, .contacts__info, .contacts__map, .catalog__cta');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => { el.classList.add('reveal'); observer.observe(el); });
}

document.getElementById('year').textContent = new Date().getFullYear();
