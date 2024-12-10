document.getElementById('registerForm').addEventListener('submit', function(event) {
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    event.preventDefault();
  }
});
.hero-title {
  animation: slideIn 1s ease-in-out;
}
.hero-text {
  animation: fadeIn 1.5s ease-in-out;
}
.hero-btn {
  animation: bounceIn 2s ease-in-out;
}

@keyframes slideIn {
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes bounceIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Form submitted successfully!');
  const form = document.getElementById('contactForm');
  form.classList.add('submitted');
});