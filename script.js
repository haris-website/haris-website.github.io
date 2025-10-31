// script.js - safe initialization + autoplay with pause on hover + infinite loop


document.addEventListener('DOMContentLoaded', function () {
  
  
  const photoGroups = [
  {
    title: "Astro",
    photos: ["portfolio/astro/image_1.jpg", 
            "portfolio/astro/image_2.jpg", 
            "portfolio/astro/image_3.jpg", 
            "portfolio/astro/image_4.jpg", 
            "portfolio/astro/image_5.jpg", 
            "portfolio/astro/image_6.jpg", 
            "portfolio/astro/image_7.jpg", 
    ]
  },


  
  {
    title: "Urban Photography",
    photos: ["portfolio/street/image_1.jpg", 
            "portfolio/street/image_2.jpg", 
            "portfolio/street/image_3.jpg", 
            "portfolio/street/image_4.jpg", 
            "portfolio/street/image_5.jpg", 
            "portfolio/street/image_6.jpg", 
    ]
  },



  {
    title: "Real estate",
    photos: ["portfolio/re/image_1.jpg", 
            "portfolio/re/image_2.jpg", 
            "portfolio/re/image_3.jpg", 
            "portfolio/re/image_4.jpg", 
            "portfolio/re/image_5.jpg", 
            "portfolio/re/image_6.jpg", 
            "portfolio/re/image_7.jpg", 
            "portfolio/re/image_8.jpg", 
            "portfolio/re/image_9.jpg", 
            "portfolio/re/image_10.jpg", 
            "portfolio/re/image_11.jpg", 
            "portfolio/re/image_12.jpg", 
            "portfolio/re/image_13.jpg", 
            "portfolio/re/image_14.jpg", 
            "portfolio/re/image_15.jpg", 
            "portfolio/re/image_16.jpg", 
            "portfolio/re/image_17.jpg", 
            "portfolio/re/image_18.jpg", 
            "portfolio/re/image_19.jpg", 
            "portfolio/re/image_20.jpg", 
            "portfolio/re/image_21.jpg", 
    ]
  }
  ];

  const container = document.getElementById("carousels-container");
  photoGroups.forEach(group => {
  // Create section
  const section = document.createElement("div");
  section.classList.add("carousel-section");

  // Title
  const title = document.createElement("h2");
  title.textContent = group.title;
  section.appendChild(title);

  // Carousel track
  const track = document.createElement("div");
  track.classList.add("carousel-track");

  group.photos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo;
    track.appendChild(img);
  });

  section.appendChild(track);
  container.appendChild(section);
});

const carousels = document.querySelectorAll('.carousel-section');

window.addEventListener('scroll', () => {
  const viewportHeight = window.innerHeight;

  carousels.forEach(section => {
    const track = section.querySelector('.carousel-track');
    const rect = section.getBoundingClientRect();

    // scrollProgress: 0 to 1 while section is visible
    let scrollProgress = 1 - (rect.bottom / (viewportHeight + rect.height));
    scrollProgress = Math.min(Math.max(scrollProgress, 0), 1);

    const trackWidth = track.scrollWidth;
    const containerWidth = track.parentElement.offsetWidth;
    const maxTranslate = trackWidth - containerWidth;

    track.style.transform = `translateX(-${scrollProgress * maxTranslate}px)`;
  });
});
});

/*  const slidesContainer = document.querySelector('.slides');
  slidesContainer.innerHTML = photos
  .map(src => `<div class="slide"><img src="${src}" alt=""></div>`)
  .join('');

  
  
  const slidesWrap = document.querySelector('.slides');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prevBtn = document.querySelector('.left');
  const nextBtn = document.querySelector('.right');

  if (!slidesWrap || slides.length === 0) return;

  let index = 0;
  let timerId = null;
  const AUTOPLAY_MS = 5000;

  function goTo(i) {
    index = (i % slides.length + slides.length) % slides.length;
    slidesWrap.style.transform = `translateX(${-index * 100}%)`;
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  function start() {
    stop();
    timerId = setInterval(next, AUTOPLAY_MS);
  }
  function stop() {
    if (timerId) { clearInterval(timerId); timerId = null; }
  }

  // arrows
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); start(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); start(); });

  // pause on hover (on the visible slider area)
  const slider = document.querySelector('.slider');
  if (slider) {
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);
  }

  // keyboard navigation (optional convenience)
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'ArrowLeft') { prev(); start(); }
    if (ev.key === 'ArrowRight') { next(); start(); }
  });

  // initialize
  goTo(0);
  start();
});
*/