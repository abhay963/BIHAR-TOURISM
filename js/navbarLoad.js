document.addEventListener("DOMContentLoaded", () => {
  // Dynamically load navbar.html content into placeholder
  fetch('navbar.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      const placeholder = document.getElementById('navbar-placeholder');
      if (placeholder) {
        placeholder.innerHTML = data;
      }
    })
    .catch(error => {
      console.error('Error loading navbar:', error);
    });
});
