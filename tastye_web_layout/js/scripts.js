// Custom scripts for Tastyc homepage

document.addEventListener('DOMContentLoaded', function() {
  // Video modal logic for About Us section
  var aboutVideoModal = document.getElementById('aboutVideoModal');
  var aboutVideoIframe = document.getElementById('aboutVideoIframe');
  var playBtn = document.querySelector('.video-thumbnail button');
  var youtubeLink = 'https://www.youtube.com/embed/2d16XJdOKws?autoplay=1'; // User's video

  if (playBtn && aboutVideoModal && aboutVideoIframe) {
    playBtn.addEventListener('click', function() {
      aboutVideoIframe.src = youtubeLink;
    });
    aboutVideoModal.addEventListener('hidden.bs.modal', function () {
      aboutVideoIframe.src = '';
    });
  }
});

// Counter animation for stats section
function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const duration = 1500; // ms
  const start = 0;
  const stepTime = Math.max(Math.floor(duration / target), 10);
  let current = start;
  const increment = target / (duration / stepTime);
  function updateCounter() {
    current += increment;
    if (current < target) {
      counter.textContent = Math.floor(current);
      setTimeout(updateCounter, stepTime);
    } else {
      counter.textContent = target;
    }
  }
  updateCounter();
}

function handleCountersOnScroll() {
  const counters = document.querySelectorAll('.counter');
  let triggered = false;
  function checkAndAnimate() {
    if (triggered) return;
    const section = document.querySelector('.bg-light .counter');
    if (section && section.getBoundingClientRect().top < window.innerHeight - 100) {
      counters.forEach(animateCounter);
      triggered = true;
    }
  }
  window.addEventListener('scroll', checkAndAnimate);
  checkAndAnimate();
}

document.addEventListener('DOMContentLoaded', handleCountersOnScroll);

// Hero background image slider
(function() {
  const hero = document.getElementById('hero-section');
  const heading = document.getElementById('hero-heading');
  const subtext = document.getElementById('hero-subtext');
  const btns = document.getElementById('hero-btns');
  const shopBtnWrapper = document.getElementById('shop-btn-wrapper');
  if (!hero || !heading || !subtext || !btns) return;
  const images = [
    'images/home bg.webp',
    'images/pizza.jpeg'
  ];
  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % images.length;
    hero.style.backgroundImage = `url('${images[idx]}')`;
    hero.style.backgroundPosition = 'center';
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundRepeat = 'no-repeat';
    // Always left-aligned, side by side buttons
    if (shopBtnWrapper) shopBtnWrapper.style.display = 'none';
    heading.classList.remove('text-center');
    heading.classList.add('text-start');
    subtext.classList.remove('text-center');
    subtext.classList.add('text-start');
    btns.classList.remove('justify-content-center');
    btns.classList.add('align-items-center');
    if (idx === 0) {
      heading.innerHTML = 'Welcome Back<br>To Tastye';
    } else {
      heading.innerHTML = 'Reserve Your<br>Table Today';
    }
  }, 3000);
})();

// Footer gallery carousel
(function() {
  const gallery = document.getElementById('footer-gallery');
  const prevBtn = document.getElementById('footer-gallery-prev');
  const nextBtn = document.getElementById('footer-gallery-next');
  if (!gallery || !prevBtn || !nextBtn) return;
  const images = Array.from(gallery.querySelectorAll('.footer-gallery-img'));
  let startIdx = 0;
  const visibleCount = 4;
  function updateGallery() {
    images.forEach((img, i) => {
      img.style.display = (i >= startIdx && i < startIdx + visibleCount) ? 'inline-block' : 'none';
    });
  }
  prevBtn.addEventListener('click', function() {
    startIdx = (startIdx - 1 + images.length) % images.length;
    if (startIdx > images.length - visibleCount) startIdx = images.length - visibleCount;
    if (startIdx < 0) startIdx = 0;
    updateGallery();
  });
  nextBtn.addEventListener('click', function() {
    startIdx = (startIdx + 1) % images.length;
    if (startIdx > images.length - visibleCount) startIdx = 0;
    updateGallery();
  });
  updateGallery();
})();
// Back to Top smooth scroll
(function() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})(); 
