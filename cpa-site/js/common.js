document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('header.main');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 8) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    });
  }

  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { obs.observe(el); });
  }
});
