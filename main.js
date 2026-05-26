// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => links.classList.remove('open'));
});

// Scroll reveal
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1 }
);
document.querySelectorAll('.section-label, .section-title, .about-text, .about-avatar, .skill-card, .project-card, .contact-form, .contact-info, .contact-sub').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Message Sent!';
  btn.disabled = true;
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.disabled = false;
    btn.style.background = '';
    e.target.reset();
  }, 3000);
});
