// 1. Print a welcome message to the console
console.log('Welcome to your website!');

// 2. Show the current year in the footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// 3. Select an element and change its text or color
const aboutSection = document.getElementById('about');
if (aboutSection) {
  aboutSection.style.color = '#0d9488'; // teal color
  // Or change text:
  // aboutSection.querySelector('p').textContent = 'This text was changed by JavaScript!';
}

// 4. Add a new button to the Projects section that changes something on the page
const projectsSection = document.getElementById('projects');
if (projectsSection) {
  const myBtn = document.getElementById('button-id');
  myBtn.addEventListener('click', () => {
    // Change background color and print to console
    document.body.style.background = '#fef9c3';
    console.log('Background color changed!');
  });
}

// 5. Prevent form submit if fields are empty, show a message
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
