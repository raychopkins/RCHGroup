
(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav__toggle');
  const mobile = document.querySelector('.mobile-nav');
  if (!toggle || !mobile) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    mobile.hidden = expanded;
  });

  // Close menu on click
  mobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      mobile.hidden = true;
    });
  });
})();
