document.addEventListener('DOMContentLoaded', () => {
  /* =============================
     ✅ MOBILE NAVIGATION
  ============================= */
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  if (menuBtn && navLinks) {
    // Toggle menu visibility
    menuBtn.addEventListener('click', () => {
      const isActive = menuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    links.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* =============================
     🎯 PROJECT FILTERING
  ============================= */
  const filterContainer = document.querySelector('.filter-controls');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-status]');
  const noResultsMessage = document.getElementById('no-results');

  if (filterContainer && filterButtons.length && projectCards.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Update active state on buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        let visibleProjects = 0;

        // Filter with fade effect
        projectCards.forEach(card => {
          const cardStatus = card.getAttribute('data-status');
          const shouldShow = filterValue === 'all' || cardStatus === filterValue;

          if (shouldShow) {
            card.classList.remove('hide');
            card.style.opacity = '0';
            setTimeout(() => (card.style.opacity = '1'), 100);
            visibleProjects++;
          } else {
            card.style.opacity = '0';
            setTimeout(() => card.classList.add('hide'), 200);
          }
        });

        // Show or hide the 'no results' message
        if (noResultsMessage) {
          noResultsMessage.style.display = visibleProjects === 0 ? 'block' : 'none';
        }
      });
    });
  }

  /* =============================
     ✨ SCROLL ANIMATION ON LOAD
  ============================= */
  const animatedItems = document.querySelectorAll('.animate-card, .animate-fade-in');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  animatedItems.forEach(item => observer.observe(item));
});
