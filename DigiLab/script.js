const serviceData = {
  strategy: {
    icon: '<i class="fa-solid fa-box-open fa-3x text-success mb-3"></i>',
    title: 'Business Strategy',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur',
    detail: 'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.'
  },
  research: {
    icon: 'images/icon2.png',
    title: 'Research',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur',
    detail: 'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.'
  },
  analysis: {
    icon: 'images/icon3.png',
    title: 'Data Analysis',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur',
    detail: 'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.'
  },
  ui: {
    icon: 'images/icon4.png',
    title: 'UI Design',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur',
    detail: 'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.'
  },
  ux: {
    icon: 'images/icon5.png',
    title: 'Ux Design',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur',
    detail: 'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.'
  },
  tech: {
    icon: 'images/icon6.png',
    title: 'Technology',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur',
    detail: 'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.'
  },
  creative: {
    icon: 'images/creative.jpeg',
    title: 'Creative',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur',
    detail: 'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.'
  }
};

const tabs = document.querySelectorAll('.service-tab');
const iconEl = document.getElementById('service-main-icon');
const titleEl = document.getElementById('service-main-title');
const descEl = document.getElementById('service-main-desc');
const detailEl = document.getElementById('service-main-detail');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const key = tab.getAttribute('data-service');
    const data = serviceData[key];
    // Show only the relevant service image
    document.querySelectorAll('.service-main-img').forEach(img => img.style.display = 'none');
    const imgEl = document.getElementById('service-main-img-' + key);
    if (imgEl) imgEl.style.display = 'block';
    titleEl.innerText = data.title;
    descEl.innerText = data.desc;
    detailEl.innerText = data.detail;
  });
});

// Hero section image/text switch
const heading = document.getElementById("main-heading");
const image = document.getElementById("main-image");
let toggle = true;
setInterval(() => {
    if (toggle) {
        heading.innerText = "Small Details Make Big Impressions";
        image.src = "images/mobilebg.jpg";
        image.alt = "Phone";
    } else {
        heading.innerText = "Strategic Design and Technology Agency";
        image.src = "images/laptopbg.jpg";
        image.alt = "Laptop";
    }
    toggle = !toggle;
}, 2000);

// Project Carousel Logic
const carouselTrack = document.querySelector('.project-carousel-track');
const carouselItems = document.querySelectorAll('.project-carousel-item');
const prevBtn = document.getElementById('project-prev');
const nextBtn = document.getElementById('project-next');
const carouselDots = document.querySelectorAll('.project-carousel-dots .dot');
let carouselIndex = 0;
let carouselInterval;

function getSlidesToShow() {
  return window.innerWidth <= 700 ? 1 : 3;
}

function updateCarousel() {
  const slidesToShow = getSlidesToShow();
  const itemWidth = 100 / slidesToShow;
  carouselItems.forEach(item => {
    item.style.maxWidth = itemWidth + '%';
    item.style.flex = `0 0 ${itemWidth}%`;
  });
  const maxIndex = carouselItems.length - slidesToShow;
  if (carouselIndex > maxIndex) carouselIndex = 0;
  carouselTrack.style.transform = `translateX(-${carouselIndex * (100 / slidesToShow)}%)`;
  carouselDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === Math.floor(carouselIndex / slidesToShow));
  });
}

function nextCarousel() {
  const slidesToShow = getSlidesToShow();
  carouselIndex += slidesToShow;
  if (carouselIndex > carouselItems.length - slidesToShow) carouselIndex = 0;
  updateCarousel();
}

function prevCarousel() {
  const slidesToShow = getSlidesToShow();
  carouselIndex -= slidesToShow;
  if (carouselIndex < 0) carouselIndex = carouselItems.length - slidesToShow;
  updateCarousel();
}

function startCarousel() {
  carouselInterval = setInterval(nextCarousel, 3000);
}
function stopCarousel() {
  clearInterval(carouselInterval);
}

nextBtn.addEventListener('click', () => {
  nextCarousel();
  stopCarousel();
  startCarousel();
});
prevBtn.addEventListener('click', () => {
  prevCarousel();
  stopCarousel();
  startCarousel();
});

carouselDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    const slidesToShow = getSlidesToShow();
    carouselIndex = i * slidesToShow;
    updateCarousel();
    stopCarousel();
    startCarousel();
  });
});

// Drag/swipe support
let startX = 0;
let isDragging = false;
let moved = false;
carouselTrack.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX;
  moved = false;
});
carouselTrack.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  moved = true;
});
carouselTrack.addEventListener('mouseup', (e) => {
  if (!isDragging) return;
  let diff = e.pageX - startX;
  if (diff > 50) prevBtn.click();
  else if (diff < -50) nextBtn.click();
  isDragging = false;
});
carouselTrack.addEventListener('mouseleave', () => { isDragging = false; });
// Touch events for mobile
carouselTrack.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].pageX;
  moved = false;
});
carouselTrack.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  moved = true;
});
carouselTrack.addEventListener('touchend', (e) => {
  if (!isDragging) return;
  let diff = e.changedTouches[0].pageX - startX;
  if (diff > 50) prevBtn.click();
  else if (diff < -50) nextBtn.click();
  isDragging = false;
});

window.addEventListener('resize', updateCarousel);
updateCarousel();
startCarousel();

// Scroll Spy for Navbar
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const sections = [
  document.getElementById('home'),
  document.getElementById('services'),
  document.getElementById('projects'),
  document.getElementById('about'),
  document.getElementById('testimony'),
  document.getElementById('blog'),
  document.getElementById('contact')
];
const sectionIds = ['home','services','projects','about','testimony','blog','contact'];

function onScrollSpy() {
  let scrollPos = window.scrollY + 120;
  let activeIdx = 0;
  for (let i = 0; i < sections.length; i++) {
    if (sections[i] && sections[i].offsetTop <= scrollPos) {
      activeIdx = i;
    }
  }
  navLinks.forEach(link => link.classList.remove('active-link'));
  const activeLink = document.querySelector('.navbar-nav .nav-link[href="#' + sectionIds[activeIdx] + '"]');
  if (activeLink) activeLink.classList.add('active-link');
}
window.addEventListener('scroll', onScrollSpy);
onScrollSpy();

// Counter animation for about-experience-number
function animateExperienceCounter() {
  const counter = document.querySelector('.about-experience-number');
  if (!counter) return;
  let started = false;
  function runCounter() {
    if (started) return;
    started = true;
    let i = 1;
    const target = 20;
    const interval = setInterval(() => {
      counter.textContent = i;
      if (i >= target) clearInterval(interval);
      i++;
    }, 60);
  }
  // Use IntersectionObserver to trigger when in view
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      runCounter();
      observer.disconnect();
    }
  }, { threshold: 0.5 });
  observer.observe(counter);
}
animateExperienceCounter();

// Testimony Carousel Logic (3 at a time)
const testimonyTrack = document.querySelector('.testimony-carousel-track');
const testimonyCards = document.querySelectorAll('.testimony-card');
const testimonyDots = document.querySelectorAll('.testimony-dots .dot');
let testimonyGroupIndex = 0;
let testimonyInterval;

function getTestimonyGroupSize() {
  return window.innerWidth <= 900 ? 1 : 3;
}
function updateTestimonyCarousel() {
  const groupSize = getTestimonyGroupSize();
  const maxIndex = Math.ceil(testimonyCards.length / groupSize) - 1;
  if (testimonyGroupIndex > maxIndex) testimonyGroupIndex = 0;
  const offset = -(testimonyGroupIndex * 100);
  testimonyTrack.style.transform = `translateX(${offset}%)`;
  testimonyDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === testimonyGroupIndex);
  });
}
function nextTestimonyGroup() {
  const groupSize = getTestimonyGroupSize();
  const maxIndex = Math.ceil(testimonyCards.length / groupSize) - 1;
  testimonyGroupIndex = (testimonyGroupIndex + 1) > maxIndex ? 0 : (testimonyGroupIndex + 1);
  updateTestimonyCarousel();
}
function startTestimonyCarousel() {
  testimonyInterval = setInterval(nextTestimonyGroup, 4000);
}
function stopTestimonyCarousel() {
  clearInterval(testimonyInterval);
}
testimonyDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    testimonyGroupIndex = i;
    updateTestimonyCarousel();
    stopTestimonyCarousel();
    startTestimonyCarousel();
  });
});
window.addEventListener('resize', updateTestimonyCarousel);
updateTestimonyCarousel();
startTestimonyCarousel(); 
