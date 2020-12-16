/* -------------------------MAGAZINE SLIDEER / SLIDE SHOW JS USING GLIDER.JS */

new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1.5,
    slidesToScroll: 1,
    scrollLock: true,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 'auto',
          slidesToScroll: 'auto',
          itemWidth: 150,
          duration: 0.25,
          slidesToShow: 3.5
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });

  /* ---------------------------------------------------------------------- */



/*------------------------- PHOTO OF THE DAY IMAGE MOVEMENT JS------------------- */
  const photo_bg_container=document.querySelector('.photo-container')
  const photo_bg=document.querySelector('.photo-bg')
  
  photo_bg_container.addEventListener('mousemove',(e)=>{

    photo_bg.style.backgroundPositionX = -e.offsetX/10 + "px";
    photo_bg.style.backgroundPositionY = -e.offsetY/10 + "px";
  })
  photo_bg_container.addEventListener('mouseout',(e)=>{
    photo_bg.style.backgroundPosition=`center`
  })
/* -------------------------------------------------------------------- */



  /*------------------- NAVIGATTION LINK JS----------------------- */

const nav_topic_links=document.querySelectorAll('.nav-link-topics-container .nav-link-topics a');
const nav_bg=document.querySelector('.nav-bg');
const nav_bg_after=document.querySelector('.nav-bg::after');
const nav_bg_image=document.querySelector('.nav-bg img');

  nav_topic_links.forEach((el)=>{
    el.addEventListener('mouseover',(e)=>{
      el.style.color='white';
      nav_bg_image.style.opacity=1;
      nav_bg_image.src=`./assets/images/${el.getAttribute('data-id')}.jpg`
      
      
    })
    
    el.addEventListener('mouseleave',(e)=>{
      nav_bg_image.style.opacity=0;
      el.style.color='rgba(245, 245, 245, 0.85)';
    })
  
  })
  


/* ------------------------------------------------------------------ */


/* --------------NAV BAR OPENIUING AND CLOSING */

const nav_section=document.querySelector('.nav-section')
function opennav(){
  nav_section.style.height='100%';
}
function closenav(){
  nav_section.style.height='0%';
}

/* --------------------------------------------------- */
