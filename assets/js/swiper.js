// news
new Swiper("#news_swipe_container", {
    spaceBetween: 12,
    loop: true,
    observer: true,
    observeParents: true,
    preventClicks: false,
    preventClicksPropagation: false,
    autoplay: {
        delay: 1000 * 10
    },
    pagination: {
        el: "#news_swiper_pagination",
        clickable: true
    },
    navigation: {
        prevEl: "#prev_news",
        nextEl: "#next_news"
    }
})