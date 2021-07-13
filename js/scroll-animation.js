const sr = ScrollReveal({
  reset: false,
  easing: 'ease-out',
  viewFactor: 0.5,
  container: document.querySelector('.container')
})


// sr.reveal(`.section_header`, {
//     distance: '600px',
//     origin: 'right',
//     interval: 100,
//     duration: 1000,
// })

sr.reveal('.feature:nth-child(odd)', {
    distance: '75px',
    origin: 'left',
    delay: 250,
    duration: 1000,
})

sr.reveal('.feature:nth-child(even)', {
    distance: '75px',
    origin: 'right',
    delay: 250,
    duration: 1000,
})

if (window.innerWidth <= 768) {
  sr.reveal('.about-us__image > img', {
    distance: '75px',
    origin: 'top',
    duration: 500,
    viewFactor: 0.3,
  })
  
  sr.reveal('.about-us__text > p', {
    distance: '75px',
    origin: 'bottom',
    duration: 500,
    viewFactor: 0.3,
  })


  sr.reveal('.step:nth-child(odd)', {
    distance: '75px',
    origin: 'left',
    delay: 250,
    desktop: false,
    duration: 1000,
  })
  
  sr.reveal('.step:nth-child(even)', {
    distance: '75px',
    origin: 'right',
    delay: 250,
    desktop: false,
    duration: 1000,
  })
  
  sr.reveal('.direct-contact__header, .direct-contact__link', {
    distance: '30px',
    origin: 'bottom',
    desktop: false,
    duration: 750,
  })
  
  sr.reveal('.direct-contact__image', {
    distance: '50px',
    origin: 'right',
    duration: 500,
    rotate: { z: 75 },
  })
}

else {
  sr.reveal('.about-us__image > img', {
    distance: '75px',
    origin: 'right',
    duration: 500,
    viewFactor: 0.3,
  })
  
  sr.reveal('.about-us__text > p', {
    distance: '75px',
    origin: 'left',
    duration: 500,
    viewFactor: 0.3,
  })

  sr.reveal('#process_desktop > .section_header, #process_desktop > .request-submit', {
    distance: '75px',
    origin: 'top',
    duration: 750,
  })

  sr.reveal('.step', {
    distance: '75px',
    origin: 'bottom',
    interval: 700,
    duration: 750,
  })
}

// sr.reveal('.review-card', {
//   duration: 750,
//   interval: 250,
//   container: document.querySelector('.reviews_list'),
//   rotate: { y: 50 },
// })

// sr.reveal(`.card`, {
//     container: document.querySelector('.services_list'),
//     distance: '20px',
//     // opacity: 0.5,
//     // scale: 0.85,
//     origin: 'right',
//     interval: 150,
//     duration: 500,
// })