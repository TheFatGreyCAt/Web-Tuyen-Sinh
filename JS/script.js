let profile = document.querySelector('.profile');

document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
}

// admission-slide-show

let slideIndex = 0;
const slideShow = document.querySelector('.stg-box');
const slides = document.querySelectorAll('.slide-show');

const showSlide = (index) => {
    let slideWidth = slides[0].offsetWidth;
    slideShow.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
}

document.querySelector('#prev-slide').onclick = () => {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
    showSlide(slideIndex);
}

document.querySelector('#next-slide').onclick = () => {
    slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
    showSlide(slideIndex);
}

showSlide(slideIndex);

//admission-method

document.querySelectorAll('.method-title').forEach(item => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.method-title').forEach(item => {
            item.classList.remove('active');
        });
        item.classList.toggle('active');
    });

});