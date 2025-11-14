document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mkgppaqa', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = "Message sent successfully!";
        status.style.color = "#0f0";
        form.reset();
      } else {
        status.textContent = "Oops! There was a problem.";
        status.style.color = "#f00";
      }
    } catch (error) {
      status.textContent = "Network error. Try again later.";
      status.style.color = "#f00";
    }
  });
});
