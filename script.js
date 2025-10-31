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
    title: "Atifa apartments",
    photos: ["portfolio/re/atifa/image_8.jpg", 
            "portfolio/re/atifa/image_9.jpg", 
            "portfolio/re/atifa/image_10.jpg", 
            "portfolio/re/atifa/image_11.jpg", 
            "portfolio/re/atifa/image_12.jpg", 
            "portfolio/re/atifa/image_13.jpg", 
            "portfolio/re/atifa/image_14.jpg", 
            "portfolio/re/atifa/image_15.jpg", 
            "portfolio/re/atifa/image_16.jpg", 
            "portfolio/re/atifa/image_17.jpg", 
            "portfolio/re/atifa/image_18.jpg", 
            "portfolio/re/atifa/image_19.jpg", 
            "portfolio/re/atifa/image_20.jpg", 
            "portfolio/re/atifa/image_21.jpg", 
    ]
  },


  {
    title: "Sarajevo view apartments",
    photos: ["portfolio/re/sv/image_1.jpg", 
            "portfolio/re/sv/image_2.jpg", 
            "portfolio/re/sv/image_3.jpg", 
            "portfolio/re/sv/image_4.jpg", 
            "portfolio/re/sv/image_5.jpg", 
            "portfolio/re/sv/image_6.jpg", 
            "portfolio/re/sv/image_7.jpg", 
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
    const link = document.createElement("a");
    link.href = photo; // full-size image for lightbox
    link.className = "glightbox";
    link.setAttribute("data-gallery", `gallery-${group.title.replace(/\s+/g,'')}`);

    const img = document.createElement("img");
    img.src = photo;
    img.alt = photo.split("/").pop().split(".")[0];

    link.appendChild(img);
    track.appendChild(link); // append to track, NOT container
  });

  section.appendChild(track);
  container.appendChild(section);
  });


  const carousels = document.querySelectorAll('.carousel-section');
  const baseSpeed = 0.5; // pixels horizontal per 1 pixel vertical scroll
  const edgePadding = 10; // pixels of padding at left/right edges

  function updateCarousels() {
    const scrollY = window.scrollY; // vertical scroll position

    carousels.forEach((carousel, index) => {
        const track = carousel.querySelector('.carousel-track');
        const containerWidth = carousel.offsetWidth;
        const trackWidth = track.scrollWidth;

        // Alternate direction
        const direction = (index % 2 === 0) ? 1 : -1;

        // Slight deterministic speed variation per carousel (±5%)
        const speedFactor = 0.95 + 0.1 * (index / carousels.length);
        const speed = baseSpeed * speedFactor;

        // Initial offset for right-moving carousels: last photo flush with padding
        const initialOffset = direction === -1 ? trackWidth - containerWidth + edgePadding : 0;

        // Constant movement
        let translateX = initialOffset + scrollY * speed * direction;

        // Cap translation to keep first/last photo aligned with padding
        const maxTranslate = Math.max(trackWidth - containerWidth, 0);
        if (direction === 1) translateX = Math.min(translateX, maxTranslate - edgePadding);
        else translateX = Math.max(translateX, 0);

        track.style.transform = `translateX(${-translateX + edgePadding}px)`;
    });
  }

  // Update on scroll and resize
  window.addEventListener('scroll', updateCarousels);
  window.addEventListener('resize', updateCarousels);

  // Initial call
  updateCarousels();
  const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    zoomable: true
});
});