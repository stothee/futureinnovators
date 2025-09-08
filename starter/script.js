
// Set the current year in the footer
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

// Show/hide the menu on small screens
const navBtn = document.querySelector('.nav-toggle');
const menu = document.getElementById('primary-menu');
if (navBtn && menu) {
  navBtn.addEventListener('click', function () {
    menu.classList.toggle('open');
  });
}

// Simple form check
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const status = document.querySelector('.form-status');
    if (!name.value || !email.value || !message.value) {
      e.preventDefault();
      status.textContent = 'Please fill in all fields.';
    } else {
      status.textContent = 'Sending... (demo)';
    }
  });
}
