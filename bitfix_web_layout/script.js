// BitFix Website JavaScript
// Hero slider logic (simple demo)
let currentSlide = 0;
const heroSlides = [
    {
        title: 'Creative Consultation Business',
        subtitle: 'GROWUP YOUR BUSINESS',
        desc: 'Get professional & reliable research oriented solutions for Data Science and Machine Learning business needs. Enjoy stress free decision making!',
        emoji: '👔'
    },
    {
        title: 'Creative Consultation Business 2',
        subtitle: 'GROWUP YOUR BUSINESS',
        desc: 'We provide the best finance plans for your business. Join us for success!',
        emoji: '🧑‍💼'
    }
];
function renderHeroSlide(idx) {
    const slide = heroSlides[idx];
    document.querySelector('.hero-section h2').textContent = slide.subtitle;
    document.querySelector('.hero-section h1').innerHTML = slide.title.replace('Consultation', '<span style="color:var(--blue)">tation</span>');
    document.querySelector('.hero-section p.lead').textContent = slide.desc;
    document.querySelector('.hero-img-placeholder span').textContent = slide.emoji;
}
document.addEventListener('DOMContentLoaded', function() {
    // Hero slider arrows
    const leftBtn = document.querySelector('.hero-section .btn-light.start-0');
    const rightBtn = document.querySelector('.hero-section .btn-light.end-0');
    leftBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
        renderHeroSlide(currentSlide);
    });
    rightBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        renderHeroSlide(currentSlide);
    });
    // Auto slide
    setInterval(function() {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        renderHeroSlide(currentSlide);
    }, 6000);
    renderHeroSlide(currentSlide);
    // Smooth scroll for navbar links
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    // Placeholder for testimonials slider logic
    // ...
}); 
