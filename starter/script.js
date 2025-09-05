
// Stage 4+: JavaScript progressively enhancing the page

// Log and set current year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
console.log('Welcome to Web Foundations!');

// Mobile nav toggle
document.querySelector('.nav-toggle')?.addEventListener('click', (e) => {
  const btn = e.currentTarget;
  const menu = document.getElementById('primary-menu');
  if (!menu || !(btn instanceof HTMLElement)) return;
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('open');
});

// Basic form validation
const form = document.getElementById('contact-form');
form?.addEventListener('submit', (e) => {
  const status = document.querySelector('.form-status');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  let valid = true;

  [name, email, message].forEach((el) => {
    if (el && 'value' in el) {
      if (!el.value.trim()) valid = false;
    }
  });

  if (!valid) {
    e.preventDefault();
    if (status) status.textContent = 'Please fill in all fields.';
  } else if (status) {
    status.textContent = 'Sending... (demo)';
  }
});
