// Footer year
document.getElementById('year')?.append(new Date().getFullYear());

// Fake contact submit
document.getElementById('contact-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = 'Sending…';
  await new Promise(r => setTimeout(r, 700));
  status.textContent = 'Thanks! We’ll be in touch.';
  e.target.reset();
});

// Initialize Slick on your WooCommerce-style list so your CSS takes over
function initProductSlider() {
  const $ = window.jQuery;
  if (!$ || !$.fn || !$.fn.slick) return;

  const $ul = $('.wcpscwc-product-slider .products');
  if (!$ul.length) return;

  $ul.on('init', () => $ul.css({ display: 'block' })); // reveal only after slick
  $ul.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900,  settings: { slidesToShow: 2 } },
      { breakpoint: 620,  settings: { slidesToShow: 1 } }
    ]
  });
}

if (document.readyState !== 'loading') initProductSlider();
else document.addEventListener('DOMContentLoaded', initProductSlider);
