document.addEventListener('DOMContentLoaded', function() {
  // Preloader
  window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(function() {
      preloader.style.display = 'none';
    }, 500);
  });

  // Intersection Observer for fade-in sections
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(section => {
    observer.observe(section);
  });

  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });

  // Testimonial Slider Auto-Scroll
  const slider = document.querySelector('.testimonial-slider');
  if (slider) {
    let scrollAmount = 0;
    function autoScroll() {
      scrollAmount += 1;
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
      requestAnimationFrame(autoScroll);
    }
    autoScroll();
  }
});

// Function to handle the purchase button click
function purchaseEbook() {
  // Replace with your actual Stripe product URL
  window.location.href = "https://buy.stripe.com/test_12345";
}
