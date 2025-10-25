const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

// Toggle mobile menu open/close
menuBtn.addEventListener('click', () => {
  const isActive = menuBtn.classList.toggle('active');
  navLinks.classList.toggle('active');

  // Optional: disable page scroll when menu is open
  document.body.style.overflow = isActive ? 'hidden' : '';
});

// Close menu when any nav link is clicked
links.forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = ''; // re-enable scrolling
  });
});
