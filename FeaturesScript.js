document.addEventListener("DOMContentLoaded", () => {
    const serviceBoxes = document.querySelectorAll(".service-box");
  
    const handleScroll = () => {
      serviceBoxes.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (boxTop < windowHeight - 50) {
          setTimeout(() => {
            box.classList.add("loaded");
          }, index * 300); // Stagger the animation
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger the scroll event on page load to catch boxes already in view
  });