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
  /* ===== Fullscreen Menu ===== */

const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');

if(menuToggle && menuOverlay){

  menuToggle.addEventListener('click', ()=>{
    menuOverlay.classList.toggle('active');
  });

  menuOverlay.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click', ()=>{

      const action = link.getAttribute('data-link');

      if(action === 'contact'){
        menuOverlay.classList.remove('active');
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }

      else if(action === 'fullscreen'){
        menuOverlay.classList.remove('active');
        toggleFullscreen();
      }

      else {
        window.location.href = action;
      }
    });
  });
}

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
    thumb: "portfolio/dron/image_1.jpg",
    full: "portfolio/dron/image_1.jpg",
    title: "Zalazak sunca iznad Sarajeva",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/landscape/image_2.jpg",
    full: "portfolio/landscape/image_2.jpg",
    title: "Tragovi zvijezda iznad Crvenog kuka",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/street/image_4.jpg",
    full: "portfolio/street/image_4.jpg",
    title: "Pijaca u Sousse-u (Tunis)",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/landscape/image_1.jpg",
    full: "portfolio/landscape/image_1.jpg",
    title: "Tragovi zvijezda iznad Puzima",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/astro/image_9.jpg",
    full: "portfolio/astro/image_9.jpg",
    title: "Plejade/Pleiades (M45)",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/astro/image_8.jpg",
    full: "portfolio/astro/image_8.jpg",
    title: "Puni mjesec",
    meta: "Canon 250D — 50mm — f/1.8"
    }
    
  ];

  const portfolioImages = [

    //ASTRO

    {
    thumb: "portfolio/astro/image_1.jpg",
    full: "portfolio/astro/image_1.jpg",
    title: "Galaksija Andromeda (M31)",
    meta: "Canon 250D — 135mm — f/5.6"
    },
    {
    thumb: "portfolio/astro/image_2.jpg",
    full: "portfolio/astro/image_2.jpg",
    title: "Mjesec u prvoj četvrti",
    meta: "Canon 250D — 300mm — f/6.3"
    },
    {
    thumb: "portfolio/astro/image_3.jpg",
    full: "portfolio/astro/image_3.jpg",
    title: "Mliječni put iznad bivaka 'Zoran Šimić'",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/astro/image_4.jpg",
    full: "portfolio/astro/image_4.jpg",
    title: "Mliječni put iznad Visočice (Štinji do)",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/astro/image_5.jpg",
    full: "portfolio/astro/image_5.jpg",
    title: "HDR punog Mjeseca",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/astro/image_6.jpg",
    full: "portfolio/astro/image_6.jpg",
    title: "Centar Mliječnog Puta",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/astro/image_7.jpg",
    full: "portfolio/astro/image_7.jpg",
    title: "Mliječni Put iznad stećaka kod sela Umoljani",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/astro/image_8.jpg",
    full: "portfolio/astro/image_8.jpg",
    title: "Puni Mjesec",
    meta: "Canon 250D — 300mm — f/6.3"
    },
    {
    thumb: "portfolio/astro/image_9.jpg",
    full: "portfolio/astro/image_9.jpg",
    title: "Plejade/Sedam sestara (M45)",
    meta: "Canon 250D — 50mm — f/1.8"
    },


    //LANDSCAPE


    {
    thumb: "portfolio/landscape/image_1.jpg",
    full: "portfolio/landscape/image_1.jpg",
    title: "Tragovi zvijezda iznad vrha Crveni kuk (Star trails)",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/landscape/image_2.jpg",
    full: "portfolio/landscape/image_2.jpg",
    title: "Tragovi zvijezda iznad vrha Puzim (Star trails)",
    meta: "Canon 250D — 50mm — f/1.8"
    },


    //STREET

    {
    thumb: "portfolio/street/image_1.jpg",
    full: "portfolio/street/image_1.jpg",
    title: "Sunset Portrait",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/street/image_2.jpg",
    full: "portfolio/street/image_2.jpg",
    title: "Sunset Portrait",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/street/image_3.jpg",
    full: "portfolio/street/image_3.jpg",
    title: "Sunset Portrait",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/street/image_4.jpg",
    full: "portfolio/street/image_4.jpg",
    title: "Sunset Portrait",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/street/image_5.jpg",
    full: "portfolio/street/image_5.jpg",
    title: "Sunset Portrait",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/street/image_6.jpg",
    full: "portfolio/street/image_6.jpg",
    title: "Sunset Portrait",
    meta: "Canon 250D — 50mm — f/1.8"
    },

    //DRON 


    {
    thumb: "portfolio/dron/image_1.jpg",
    full: "portfolio/dron/image_1.jpg",
    title: "Zalazak sunca iznad Sarajeva i Bijele Tabije",
    meta: "Canon 250D — 50mm — f/1.8"
    },
    {
    thumb: "portfolio/dron/image_2.jpg",
    full: "portfolio/dron/image_2.jpg",
    title: "Panorama zalaska sunca iznad Sarajeva i Bijele Tabije",
    meta: "Canon 250D — 50mm — f/1.8"
    }
  ];

  /* Gallery generator */
  function getResponsiveColumnCount(defaultCount){
    // Desktop stays EXACTLY the same. Only reduce columns on tablets/phones.
    return window.matchMedia('(max-width: 1100px)').matches ? 2 : defaultCount;
  }

  function populateGallery(id, list){
    const grid = document.getElementById(id);
    if(!grid) return;

    const allCols = Array.from(grid.querySelectorAll('.col'));
    if(allCols.length === 0) return;

    // Clear previous content so we can re-render on resize/orientation changes.
    allCols.forEach(c => { c.innerHTML = ''; });

    const colCount = getResponsiveColumnCount(allCols.length);
    const cols = allCols.slice(0, colCount);

    list.forEach((img, index)=>{
      const col = cols[index % colCount];

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

  function renderGalleries(){
    populateGallery('recentGrid', recentImages);
    populateGallery('portfolioGrid', portfolioImages);

    // Lazy load (simple)
    document.querySelectorAll('img[data-src]').forEach(img=>{
      img.src = img.dataset.src;
      img.dataset.loaded = true;
    });
  }

  renderGalleries();



  // Re-render galleries on breakpoint changes (phone/tablet rotation, window resize)
  let resizeTimer = null;
  window.addEventListener('resize', ()=>{
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(()=>{
      renderGalleries();
      // If GLightbox is available, refresh bindings after re-render.
      if(window.GLightbox && typeof window.__lightboxInstance?.reload === 'function'){
        window.__lightboxInstance.reload();
      }
    }, 150);
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
      alert("Ne radi");
    });
  }


  // --- GLightbox initialization ---
  if(window.GLightbox){
    window.__lightboxInstance = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true
    });
  }

})();
