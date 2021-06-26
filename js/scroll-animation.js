const sr = ScrollReveal({
    reset: true
})


sr.reveal(`.section_header`, {
    distance: '600px',
    origin: 'right',
    interval: 100,
    duration: 1000,
})

sr.reveal(`.card`, {
    distance: '75px',
    origin: 'top',
    interval: 100,
    duration: 750,
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
    delay: 500,
    duration: 1000,
})
