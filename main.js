const form = document.getElementById('form');
const inputs = document.querySelectorAll('input');
const emailInput = document.getElementById('email');
const errorMessages = document.getElementsByClassName('error');
const errorIcons = document.getElementsByClassName('error-icon');
const successMessage = document.getElementById('success-message');

// Function to validate input fields on blur
inputs.forEach((input, i) => {
  input.addEventListener('blur', () => {
    if (!input.value) {
      input.classList.add('invalid');
      errorMessages[i].classList.add('visible');
      errorIcons[i].classList.add('visible');
    } else {
      input.classList.remove('invalid');
      errorMessages[i].classList.remove('visible');
      errorIcons[i].classList.remove('visible');
    }
  });
});

// Real-time email validation on typing
emailInput.addEventListener('input', () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailInput.style.color = 'var(--Red)';
  } else {
    emailInput.style.color = 'black';
  }
});

// Form submission handling
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual submission

  let isFormValid = true;

  inputs.forEach((input, i) => {
    if (!input.value) {
      input.classList.add('invalid');
      errorMessages[i].classList.add('visible');
      errorIcons[i].classList.add('visible');
      isFormValid = false;
    } else {
      input.classList.remove('invalid');
      errorMessages[i].classList.remove('visible');
      errorIcons[i].classList.remove('visible');
    }
  });

  // Check if email is valid
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailInput.classList.add('invalid');
    emailInput.style.color = 'var(--Red)';
    errorMessages[2].classList.add('visible');
    errorIcons[2].classList.add('visible');
    isFormValid = false;
  }

  // If everything is valid, reset and show message
  if (isFormValid) {
    form.reset();
    emailInput.style.color = 'black'; // Reset email color
    successMessage.classList.add('visible');

    setTimeout(() => {
      successMessage.classList.remove('visible');
    }, 3000);
  }
});