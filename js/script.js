// contact


   const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault()

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity()
    return;
  }

  contactForm.reset();
  successMessage.style.display = 'block';
  successMessage.scrollIntoView({behavior: 'smooth' });
});


