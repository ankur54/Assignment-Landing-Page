const slider_btn = document.querySelectorAll('#review_desktop .user_avatar')
const active_user = document.querySelector('#review_desktop .user_slider > .active')
const review_slider = document.querySelector('#review_desktop .reviews')
const user_slider = document.querySelector('#review_desktop .user_slider')
const user_slider_container = document.querySelector('#review_desktop .slider_container:nth-child(2)')

// console.log(review_slider)

let curr = 0;
const n = slider_btn.length;

user_slider.style.height = `${active_user.getBoundingClientRect().height * 1.5}px`;

slider_btn.forEach((btn, i) => {
    // console.log(btn)
    btn.addEventListener('click', e => {
        review_slider.style.transform = `translateX(-${i * 100}%)`;

        slider_btn.forEach(_ => _.classList.remove('active'))
        btn.classList.add('active')
        console.log(curr);

        const user_avatar_width = slider_btn[curr].getBoundingClientRect().width;
        const translation = (i > 1) ? (2 - i) * user_avatar_width : 0;
        user_slider.style.transform = `translateX(${translation}px)`;
        curr = i;

        console.log(translation)
    })
})
