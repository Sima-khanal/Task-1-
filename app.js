// Smooth scrolling function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior

    const targetId = this.getAttribute('href'); // Get the target section ID from href
    const targetSection = document.querySelector(targetId); // Select the target section

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop, // Scroll to the top position of the target section
        behavior: 'smooth' // Enable smooth scrolling
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.hamburger-button');
  const menuList = document.querySelector('.nav-links');

  menuButton.addEventListener('click', function () {
    menuList.classList.toggle('active');
  });

  // Search filter functionality
  const searchInput = document.getElementById('searchInput');
  const items = [
    'AI-Powered Solutions', 'Cloud Computing', 'Cybersecurity', 'Data Analytics',
    'Blockchain Technology', 'Internet of Things',];

  const featuresContainer = document.querySelector('.features-grid');

  const renderItems = (filteredItems) => {
    featuresContainer.innerHTML = filteredItems.map(item => `
      <div class="feature-item">
        <h3 class="feature-title">${item}</h3>
        <p class="feature-description">Learn more about ${item}.</p>
      </div>
    `).join('');
  };

  renderItems(items);

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredItems = items.filter(item => item.toLowerCase().includes(query));
    renderItems(filteredItems);
  });
});

