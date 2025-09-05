
// Interactivity Examples

// 1) Carousel
export function makeCarousel(root) {
  const slides = Array.from(root.querySelectorAll('.slide'));
  let i = 0;
  const show = (idx) => slides.forEach((s, j) => s.hidden = j !== idx);
  const next = () => { i = (i + 1) % slides.length; show(i); };
  const prev = () => { i = (i - 1 + slides.length) % slides.length; show(i); };
  root.querySelector('.next')?.addEventListener('click', next);
  root.querySelector('.prev')?.addEventListener('click', prev);
  show(i);
  const timer = setInterval(next, 5000);
  root.addEventListener('mouseenter', () => clearInterval(timer));
}

// Usage:
// <div class="carousel" id="c1">
//   <figure class="slide"><img src="..." alt="..."></figure>
//   <figure class="slide" hidden><img src="..." alt="..."></figure>
//   <button class="prev" aria-label="Previous">‹</button>
//   <button class="next" aria-label="Next">›</button>
// </div>
// makeCarousel(document.getElementById('c1'))

// 2) Hamburger menu (ARIA toggle)
export function attachHamburger(button, menu) {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });
}

// 3) Dynamic list add
export function attachListAdd(form, list) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    if (!input || !input.value.trim()) return;
    const li = document.createElement('li');
    li.textContent = input.value.trim();
    list.appendChild(li);
    input.value = '';
    input.focus();
  });
}
