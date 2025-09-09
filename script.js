// Set year in footer
const yearEl = document.getElementById('y');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// Mobile nav toggle
const burger = document.getElementById('hamburger');
const mainnav = document.getElementById('mainnav');
if (burger && mainnav) {
burger.addEventListener('click', () => {
const open = mainnav.classList.toggle('open');
burger.setAttribute('aria-expanded', String(open));
});
}


// Smoothly highlight active nav link while scrolling
const sectionIds = ['features','about','gallery','contact'];
const links = sectionIds.map(id => document.querySelector(`nav a[href="#${id}"]`));
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
const id = entry.target.getAttribute('id');
const link = document.querySelector(`nav a[href="#${id}"]`);
if (link) link.classList.toggle('active', entry.isIntersecting);
});
}, { threshold: 0.6 });
sectionIds.forEach(id => {
const sec = document.getElementById(id);
if (sec) observer.observe(sec);
});


// Reveal on scroll (simple IntersectionObserver animation hook)
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
entries.forEach(e => {
if (e.isIntersecting) {
e.target.style.transform = 'translateY(0)';
e.target.style.opacity = '1';
revealObs.unobserve(e.target);
}
});
}, { threshold: 0.2 });
revealEls.forEach(el => {
el.style.transform = 'translateY(16px)';
el.style.opacity = '0';
el.style.transition = 'opacity .5s ease, transform .5s ease';
revealObs.observe(el);
});


// Scroll-to-top button
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
if (!toTop) return;
toTop.classList.toggle('show', window.scrollY > 300);
});
if (toTop){
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}


// Theme toggle (dark/light)
const themeToggle = document.getElementById('themeToggle');
if (themeToggle){
}