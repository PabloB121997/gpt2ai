document.addEventListener('DOMContentLoaded', function() {
  // Fade-in effect for elements with the .fade-in class
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    fader.classList.add('hidden');
    appearOnScroll.observe(fader);
  });

  // Button press effect for all primary buttons
  const btns = document.querySelectorAll('.btn-primary');
  btns.forEach(btn => {
    btn.addEventListener('click', function() {
      btn.classList.add('btn-pressed');
      setTimeout(() => {
        btn.classList.remove('btn-pressed');
      }, 200);
    });
  });
});
