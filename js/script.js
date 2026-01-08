document.addEventListener('DOMContentLoaded', () => {
  const navbarCollapse = document.getElementById('navBar');
  const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

  // Toggle the menu on button click
  document.querySelector('.navbar-toggler').addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      bsCollapse.hide();
    } else {
      bsCollapse.show();
    }
  });

  // Close menu when clicking outside the navbar and toggle button
  document.addEventListener('click', (event) => {
    const target = event.target;
    const isInsideMenu = navbarCollapse.contains(target);
    const isToggleButton = target.closest('.navbar-toggler');

    if (!isInsideMenu && !isToggleButton && navbarCollapse.classList.contains('show')) {
      bsCollapse.hide();
    }
  });
  //  Close menu when clicking any nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      bsCollapse.hide();
    }
  });
});
});

window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};


