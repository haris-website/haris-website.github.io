// ===== script.js =====
(function(){
  'use strict';

  /* Navigation */
  document.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const t = btn.getAttribute('data-target');
      if(t) window.location.href = t;
    });
  });

  /* Fullscreen */
  function toggleFullscreen(){
    if(document.fullscreenElement){
      document.exitFullscreen().catch(()=>{});
    } else {
      document.documentElement.requestFullscreen().catch(()=>{});
    }
  }
  const fs1 = document.getElementById('fsToggle');
  const fs2 = document.getElementById('fsToggle2');
  if(fs1) fs1.addEventListener('click', toggleFullscreen);
  if(fs2) fs2.addEventListener('click', toggleFullscreen);

  /* ===== Hide / Show header on scroll ===== */
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".site-header");
    const current = window.scrollY;

    if (current > lastScroll && current > 80) {
      header.classList.add("hide");     // scroll down
    } else {
      header.classList.remove("hide");  // scroll up
    }

    lastScroll = current;
  });


  /* Placeholder images */
  const recentImages = [
    {
    thumb: "portfolio/street/image_1.jpg",
    full: "portfolio/street/image_1.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/street/image_2.jpg",
    full: "portfolio/street/image_2.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/street/image_3.jpg",
    full: "portfolio/street/image_3.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/street/image_4.jpg",
    full: "portfolio/street/image_4.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/street/image_5.jpg",
    full: "portfolio/street/image_5.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/street/image_6.jpg",
    full: "portfolio/street/image_6.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    }
  ];

  const portfolioImages = [
    {
    thumb: "portfolio/astro/image_1.jpg",
    full: "portfolio/astro/image_1.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/astro/image_2.jpg",
    full: "portfolio/astro/image_2.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/astro/image_3.jpg",
    full: "portfolio/astro/image_3.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/astro/image_4.jpg",
    full: "portfolio/astro/image_4.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/astro/image_5.jpg",
    full: "portfolio/astro/image_5.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/astro/image_6.jpg",
    full: "portfolio/astro/image_6.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/astro/image_7.jpg",
    full: "portfolio/astro/image_7.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },



    {
    thumb: "portfolio/street/image_1.jpg",
    full: "portfolio/street/image_1.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/street/image_2.jpg",
    full: "portfolio/street/image_2.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/street/image_3.jpg",
    full: "portfolio/street/image_3.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/street/image_4.jpg",
    full: "portfolio/street/image_4.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/street/image_5.jpg",
    full: "portfolio/street/image_5.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/street/image_6.jpg",
    full: "portfolio/street/image_6.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },



    {
    thumb: "portfolio/re/atifa/image_8.jpg",
    full: "portfolio/re/atifa/image_8.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/re/atifa/image_9.jpg",
    full: "portfolio/re/atifa/image_9.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/re/atifa/image_10.jpg",
    full: "portfolio/re/atifa/image_10.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/re/atifa/image_11.jpg",
    full: "portfolio/re/atifa/image_11.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/re/atifa/image_12.jpg",
    full: "portfolio/re/atifa/image_12.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/re/atifa/image_13.jpg",
    full: "portfolio/re/atifa/image_13.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/re/atifa/image_14.jpg",
    full: "portfolio/re/atifa/image_14.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/re/atifa/image_15.jpg",
    full: "portfolio/re/atifa/image_15.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/re/atifa/image_16.jpg",
    full: "portfolio/re/atifa/image_16.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/re/atifa/image_17.jpg",
    full: "portfolio/re/atifa/image_17.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/re/atifa/image_18.jpg",
    full: "portfolio/re/atifa/image_18.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/re/atifa/image_19.jpg",
    full: "portfolio/re/atifa/image_19.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/re/atifa/image_20.jpg",
    full: "portfolio/re/atifa/image_20.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/re/atifa/image_21.jpg",
    full: "portfolio/re/atifa/image_21.jpg",
    title: "Sunset Portrait",
    meta: "Canon 5D — 50mm — f/1.8"
    }
  ];

  /* Gallery generator */
  function populateGallery(id, list){
    const grid = document.getElementById(id);
    if(!grid) return;

    const cols = grid.querySelectorAll('.col');

    list.forEach((img, index)=>{
      const col = cols[index % cols.length];

      col.innerHTML += `
        <figure class="photo">
          <a href="${img.full}" class="glightbox" data-gallery="${id}" data-title="${img.title}">
            <img data-src="${img.thumb}" alt="${img.title}">
          </a>
          <figcaption>
            <strong>${img.title}</strong>
            <span class="meta">${img.meta}</span>
          </figcaption>
        </figure>
      `;
    });
  }

  populateGallery('recentGrid', recentImages);
  populateGallery('portfolioGrid', portfolioImages);



  /* Lazy load */
  document.querySelectorAll('img[data-src]').forEach(img=>{
    img.src = img.dataset.src;
    img.dataset.loaded = true;
  });

  /* Hover states */
  document.addEventListener('mouseover', e=>{
    if(e.target.closest('.photo')) e.target.closest('.photo').classList.add('is-hover');
  });
  document.addEventListener('mouseout', e=>{
    if(e.target.closest('.photo')) e.target.closest('.photo').classList.remove('is-hover');
  });

  /* Contact form demo */
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      alert("Demo form only.");
    });
  }


  // --- GLightbox initialization ---
  GLightbox({
  selector: '.glightbox',
  touchNavigation: true,
  loop: true
  });

})();
