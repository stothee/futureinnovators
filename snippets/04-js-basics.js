
// JS Basics Example
console.log('Hello from JS basics');

// DOM selection and text update
document.body.insertAdjacentHTML('afterbegin', '<p id="greet">Hi there!</p>');
const greet = document.getElementById('greet');
if (greet) greet.textContent = 'Updated greeting via JS';

// Button handler
const btn = document.createElement('button');
btn.textContent = 'Change background';
document.body.appendChild(btn);
btn.addEventListener('click', () => {
  document.body.style.background = '#fef9c3';
});

// Simple form validation
const form = document.createElement('form');
form.innerHTML = `
  <label>Name <input id="n" required></label>
  <button type="submit">Submit</button>
  <span class="msg" style="margin-left:8px;"></span>
`;
document.body.appendChild(form);
form.addEventListener('submit', (e) => {
  const n = document.getElementById('n');
  const msg = form.querySelector('.msg');
  if (n && !n.value.trim()) {
    e.preventDefault();
    msg.textContent = 'Please enter your name.';
  }
});
