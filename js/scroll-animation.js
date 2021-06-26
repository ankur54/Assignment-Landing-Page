const sr = ScrollReveal({
    reset: false
})


sr.reveal(`.section_header`, {
    distance: '600px',
    origin: 'right',
    interval: 100,
    duration: 1000,
})

sr.reveal(`.card`, {
    // distance: '75px',
    // origin: 'top',
    opacity: 0,
    scale: 0.75,
    interval: 100,
    duration: 1000,
})


sr.reveal('.feature:nth-child(odd)', {
    distance: '75px',
    origin: 'left',
    interval: 100,
    duration: 1000,
})

sr.reveal('.feature:nth-child(even)', {
    distance: '75px',
    origin: 'right',
    interval: 100,
    delay: 750,
    duration: 1000,
})
