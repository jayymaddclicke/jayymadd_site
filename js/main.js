// Navbar Scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Book Meeting Modal
function openBooking() {
  document.getElementById('bookingModal').style.display = 'flex';
  setTimeout(() => {
    Calendly.initInlineWidget({
      url: 'https://calendly.com/your-calendly-link',
      parentElement: document.getElementById('calendly-inline-widget')
    });
  }, 500);
}

function closeBooking() {
  document.getElementById('bookingModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(e) {
  const modal = document.getElementById('bookingModal');
  if (e.target === modal) closeBooking();
}
