// Portfolio Filtering
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (filterButtons.length === 0 || portfolioItems.length === 0) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      // Filter portfolio items
      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filterValue === 'all' || filterValue === category) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Add CSS animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
});