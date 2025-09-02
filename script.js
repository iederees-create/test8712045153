// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when link clicked (mobile)
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Smooth scroll for on-page links
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

// Contact form (fake submit)
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Sending…';
    // TODO: hook up your real endpoint here
    await new Promise(r => setTimeout(r, 800));
    statusEl.textContent = 'Thanks! Your message has been sent.';
    form.reset();
  });
}

// Back to top button
const toTop = document.getElementById('to-top');
function toggleTop() {
  if (window.scrollY > 600) toTop.classList.add('show');
  else toTop.classList.remove('show');
}
window.addEventListener('scroll', toggleTop);
toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- How to replace placeholders ----------
1) For images: on any .media-placeholder, add inline background-image:
   <div class="media-placeholder ratio-3x2" style="background-image:url('assets/about.jpg'); background-size:cover; background-position:center"></div>

2) For gallery: same as above for each tile, or swap the block with:
   <img src="assets/work-1.jpg" alt="Project title" loading="lazy" />

3) For video: uncomment the <video> block in index.html and point to your .mp4,
   OR paste a YouTube/Vimeo <iframe> into the .embed container.
--------------------------------------------------- */
