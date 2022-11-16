import Swiper, {
    Autoplay,
    Navigation,
    Pagination,
    Scrollbar
} from 'swiper';
import 'swiper/swiper-bundle.css'
import './index.scss'

Swiper.use([Autoplay, Navigation, Pagination, Scrollbar])

const banner_swiper = new Swiper(".banner_swiper", {
    slidesPerView: '1',
    loop: true,

    navigation: {
        nextEl: ".top-slider-btn-next",
        prevEl: ".top-slider-btn-prev",
    },

    pagination: {
        el: ".banner_swiper_pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return `<div class="pagination_wrapper"> 
                <span class="currentZero">0</span><span class="${currentClass}"></span> 
                <span class="totalZero">/0</span><span class="${totalClass}"></span> 
            </div>`
        }
    },
})

const projects_swiper = new Swiper(".projects_swiper", {
    slidesPerView: '4',
    spaceBetween: '10',

    pagination: {
        el: ".projects_swiper_pagination",
        type: "bullets",
        // renderFraction: function (currentClass, totalClass) {
        //     return `<div class="pagination_wrapper"> 
        //         <span class="currentZero">0</span><span class="${currentClass}"></span> 
        //         <span class="totalZero">/0</span><span class="${totalClass}"></span> 
        //     </div>`
        // }
    },
})