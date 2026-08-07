// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Animate tool rings when they scroll into view
const CIRC = 2 * Math.PI * 52; // r=52 from the SVG

document.querySelectorAll('.tool').forEach(tool => {
  const pct = parseFloat(tool.dataset.pct) || 0;
  const ring = tool.querySelector('.ring-fill');
  ring.style.strokeDasharray = CIRC;
  ring.style.strokeDashoffset = CIRC;
  tool._targetOffset = CIRC - (pct / 100) * CIRC;
});

const ringObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const ring = entry.target.querySelector('.ring-fill');
      ring.style.strokeDashoffset = entry.target._targetOffset;
      ringObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.tool').forEach(tool => ringObserver.observe(tool));

// Gentle fade/rise-in for major sections
const revealTargets = document.querySelectorAll(
  '.skill-list li, .tl-item, .project, .org__grid li, .org__featured'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal--in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => revealObserver.observe(el));
