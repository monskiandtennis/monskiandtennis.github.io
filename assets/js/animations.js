document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for Scroll Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  // Elements to animate
  const animatedElements = document.querySelectorAll('.section-header, .credential-card, .highlight-item, .gallery-item, .contact-card, .form-group');

  animatedElements.forEach((el, index) => {
    // Add staggered delay for grid items
    if (el.classList.contains('credential-card') || el.classList.contains('highlight-item') || el.classList.contains('gallery-item')) {
      el.style.transitionDelay = `${(index % 3) * 0.1}s`;
    }

    // Initial state (if not already set in CSS, though it should be)
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

    observer.observe(el);
  });

  // Add 'visible' class styles dynamically if not in CSS
  // (Though we added .section-header.visible in CSS, others might need it)
  // We'll rely on the inline styles added above for the transition, 
  // and the class addition to trigger the opacity/transform change.

  // Override the inline styles when visible
  const styleSheet = document.createElement("style");
  styleSheet.innerText = `
    .visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(styleSheet);

  // Parallax Effect for Hero
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      // Parallax for background
      hero.style.backgroundPositionY = `${scrolled * 0.5}px`;

      // Parallax for content
      const content = document.querySelector('.hero-content');
      if (content) {
        content.style.transform = `translateY(${scrolled * 0.3}px)`;
        content.style.opacity = 1 - (scrolled / 700);
      }
    }

    // Navbar Glass Effect
    const header = document.querySelector('.site-header');
    if (scrolled > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Background Icons Parallax
    const bgIcons = document.querySelectorAll('.bg-icon');
    bgIcons.forEach(icon => {
      const speed = icon.getAttribute('data-speed');
      const yPos = -(scrolled * speed);
      const rotation = scrolled * speed * 0.5;
      icon.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
    });
  });

  // Typing Effect for Hero Title (Optional "Wow" factor)
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.innerText;
    // We won't actually replace the text to avoid SEO issues or layout shifts,
    // but we could add a cursor effect or similar if requested.
    // For now, the CSS fade-in-up is sufficient.
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
