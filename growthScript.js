// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get all the stat value elements
    const statValues = document.querySelectorAll('.stat-value');
    const sectionTitleLine = document.querySelector('.section-title-line');
  
    // Function to animate the stat values
    function animateStats() {
      statValues.forEach(function(statValue) {
        const target = parseInt(statValue.dataset.target);
        let count = 0;
        const interval = setInterval(function() {
          statValue.textContent = count;
          if (count >= target) {
            clearInterval(interval);
          } else {
            count += Math.ceil(target / 100);
          }
        }, 10);
      });
  
      // Animate the section title line
      sectionTitleLine.style.transform = 'scaleX(1)';
    }
  
    // Trigger the animation when the section is in view
    const statsSection = document.querySelector('.stats-section');
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateStats();
          observer.unobserve(statsSection);
        }
      });
    });
    observer.observe(statsSection);
  });
  