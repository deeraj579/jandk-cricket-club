document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();  // Prevent default form submit
      alert('Thank you! Your message has been sent.');
      form.reset();
    });
  }
});
