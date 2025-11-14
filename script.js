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

    // --- GLightbox initialization ---
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      zoomable: false
    });
  }

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


  // === Animated Topographic Background (blobby contour lines) ===
  window.addEventListener("load", () => {
    const canvas = document.getElementById("topoCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let w = 0, h = 0;
    let blobs = [];

    function resizeCanvas() {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight; // viewport-sized background

      // define a few "hills" that generate closed contours
      blobs = [
        { x: w * 0.3, y: h * 0.4, baseR: 140 },
        { x: w * 0.7, y: h * 0.5, baseR: 160 },
        { x: w * 0.5, y: h * 0.8, baseR: 110 }
      ];
    }

    // simple pseudo-noise with time component
    function noise(a, b, t) {
      const s = 0.8;
      return (
        Math.sin(a * 1.3 * s + t * 0.0006) +
        Math.cos(b * 0.9 * s - t * 0.0004) +
        Math.sin((a + b) * 0.7 * s + t * 0.0003)
      ) * 0.33; // normalize-ish
    }

    function drawTopo(time) {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(0,0,0,0.14)";

      const contourLevels = 5;       // how many rings per blob
      const levelSpacing  = 26;      // distance between rings
      const jitter        = 18;      // how wiggly the line is
      const stepAngle     = Math.PI / 80; // detail of each loop

      blobs.forEach((blob, i) => {
        for (let level = 0; level < contourLevels; level++) {
          const baseRadius = blob.baseR + level * levelSpacing;

          ctx.beginPath();
          for (let ang = 0; ang <= Math.PI * 2 + stepAngle; ang += stepAngle) {
            const n = noise(ang + i * 10, level * 3, time);
            const r = baseRadius + n * jitter;

            const x = blob.x + Math.cos(ang) * r;
            const y = blob.y + Math.sin(ang) * r;

            if (ang === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      });
    }

    function loop(t) {
      drawTopo(t);
      requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    requestAnimationFrame(loop);
  });




})();
