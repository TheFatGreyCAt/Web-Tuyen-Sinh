let profile = document.querySelector('.profile');

document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
}

// admission-slide-show

let list = document.querySelector('.slider .stg-box');
let items = document.querySelectorAll('.slider .stg-box .slide-show');
let dots = document.querySelectorAll('.admission-slide-show .dots li');
let prev = document.getElementById('prev-slide');
let next = document.getElementById('next-slide');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems) active = 0;
    else active += 1;
    reloadSlider();
}

prev.onclick = function(){
    if(active - 1 < 0) active = lengthItems;
    else active -= 1;
    reloadSlider();
}

let autoSlide = setInterval( () => {next.click()}, 7000);

function reloadSlider()
{
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px'
    
    let lastActive = document.querySelector('.admission-slide-show .dots li.dot-active');
    lastActive.classList.remove('dot-active');
    dots[active].classList.add('dot-active');

    clearInterval(autoSlide);
    autoSlide = setInterval( () => {next.click()}, 7000);
}



dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    } )
} )

//admission-method

document.querySelectorAll('.method-title').forEach(item => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.method-title').forEach(item => {
            item.classList.remove('active');
        });
        item.classList.toggle('active');
    });
});

