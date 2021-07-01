const feature_images = document.querySelectorAll('.feature_image')

feature_images.forEach(image => {
    const parentWidth = image.parentElement.clientHeight;
    const imageWidth = image.clientHeight;
    const top = (parentWidth - imageWidth) / 2;
    console.log(top)
    image.style.top = `${top}px`;
})