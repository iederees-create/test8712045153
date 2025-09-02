// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', id);
    }
  });
});

// Back to top
const toTop = document.getElementById('to-top');
function onScroll() { window.scrollY > 600 ? toTop.classList.add('show') : toTop.classList.remove('show'); }
window.addEventListener('scroll', onScroll);
toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Fake contact + newsletter submits (replace with your backend)
const statusEl = document.getElementById('form-status');
document.getElementById('contact-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusEl.textContent = 'Sending…';
  await new Promise(r => setTimeout(r, 700));
  statusEl.textContent = 'Thanks! We’ll be in touch.';
  e.target.reset();
});

const nlStatus = document.getElementById('nl-status');
document.getElementById('newsletter')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  nlStatus.textContent = 'Subscribing…';
  await new Promise(r => setTimeout(r, 600));
  nlStatus.textContent = 'Subscribed! 🎉';
  e.target.reset();
});

/* ---------- Replace placeholders ----------
1) Hero background:
   .hero-bg style="background-image:url('assets/hero-1920x1080.jpg')"

2) Product tiles:
   Each .media.ph uses background-image. Replace with your product photos.

3) Video:
   Use <video> with MP4, or replace the .media.ph with an <iframe> inside .embed.

4) Logos:
   Swap assets/logo-placeholder.svg and assets/logo-footer.svg.
------------------------------------------------ */
