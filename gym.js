let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
};
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
};
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        786: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

// Add Cart code

document.addEventListener('DOMContentLoaded', () => {
    const addTocartbtn = document.querySelectorAll('.btn');
    const cartItemcount = document.querySelector('.fa-shopping-cart span');
    const cartItemlist = document.querySelector('.cart-test');
    const cartTotal = document.querySelector('.cart-total');
    const cartIcon = document.querySelector('.fa-shopping-cart span');
    const slider = document.getElementById('sidebar');

    let cartItems = [];
    let totalAmount = 0;
    addTocartbtn.forEach((a, index) => {
        a.addEventListener('click', () => {
            const item = {
                name: document.querySelectorAll('.box')[index].textContent,
                price: parseFloat(
                    document.querySelectorAll('.')
                )
            }
        })
    })
});


