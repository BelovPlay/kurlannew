document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelectorAll(".header__phone"),
        t = document.querySelector("span.header__phone-text");
    e.forEach(o => {
        o.addEventListener("mousemove", () => {
            o.innerHTML = '\n            <span class="header__phone-arrow">&#8594;</span>\n            <span class="header__phone-text" style="font-size: 15px;">+7 (927) 634 02 46</span>', e.append(t)
        }), o.addEventListener("mouseout", () => {
            o.innerHTML = '\n              <span class="header__phone-arrow">&#8594;</span>\n              <span  class="header__phone-text">Позвоните нам</span>', e.append(t)
        })
    });
    const o = document.querySelector(".modal-menu"),
        s = document.querySelector(".modal-tubing"),
        i = document.querySelector(".modal-faq"),
        u = document.querySelector(".modal-krl"),
        k = document.querySelector(".modal-open-tubing"),
        q = document.querySelector(".open-modal-faq"),
        b = document.querySelector(".open-modal-krl"),
        M = document.querySelector(".open-modal-menu"),
        T = document.querySelectorAll(".modal-close"),
        B = document.querySelector(".social"),
        P = document.querySelector(".arrow-top");
    q.addEventListener("click", e => {
        e.preventDefault(), i.classList.add("active")
    }), 
    T.forEach(e => {
        e.addEventListener("click", e => {
            e.preventDefault(), i.classList.remove("active")
        })
    }), 
    b.addEventListener("click", e => {
        e.preventDefault(), u.classList.add("active")
    }), 
    T.forEach(e => {
        e.addEventListener("click", e => {
            e.preventDefault(), u.classList.remove("active")
        })
    }), 
    k.addEventListener("click", e => {
        e.preventDefault(), s.classList.add("active")
    }),
    T.forEach(e => {
        e.addEventListener("click", e => {
            e.preventDefault(), s.classList.remove("active")
        })
    }),
    T.forEach(e => {
        e.addEventListener("click", e => {
            e.preventDefault(), o.classList.remove("active")
        })
    });
    const G = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        window.scrollY >= G.offsetHeight ? G.classList.add("fixed") : G.classList.remove("fixed");
        const e = document.getElementById("hero");
        let t = window.scrollY;
        t > e.offsetHeight && (B.classList.add("hidden"), P.classList.add("hidder-arrow")), t < e.offsetHeight && (B.classList.remove("hidden"), P.classList.remove("hidder-arrow"))
    }), new Swiper(".mySwiper", {
        cssMode: !0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        autoplay: {
            delay: 2000,
          },
        centeredSlides: !0,
        pagination: {
            el: ".swiper-pagination",
            clikable: !0
        },
        mousewheel: !0,
        keyboard: !0
    }), new Swiper(".mySwiper2", {
        effect: "coverflow",
        slidesPerView: 3,
        autoplay: {
            delay: 2000,
          },
        coverflowEffect: {
            rotate: 50
        },
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: !0,
        loopFillGroupWithBlank: !0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }), new Swiper(".mySwiper3", {
        cssMode: !0,
        centeredSlides: !0,
        autoplay: {
            delay: 2000,
          },
        mousewheel: !0,
        keyboard: !0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }), new Swiper(".mySwiper4", {
        cssMode: !0,
        centeredSlides: !0,
        autoplay: {
            delay: 2000,
          },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        mousewheel: !0,
        keyboard: !0
    }), new Swiper(".mySwiper5", {
        slidesPerView: "auto",
        autoplay: {
            delay: 2000,
          },
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
    const V = document.querySelector(".menu__list"),
        Y = document.querySelector(".menu__btn-open"),
        z = document.querySelector(".btn-close"),
        C = document.querySelectorAll(".menu__item");
    C.forEach(e => {
        e.addEventListener("click", () => {
            V.classList.remove("active")
        })
    }), z.addEventListener("click", () => {
        V.classList.remove("active")
    }), Y.addEventListener("click", () => {
        V.classList.add("active")
    }), C.forEach(e => {
        e.addEventListener("targetTouches", () => {
            V.classList.remove("active")
        })
    }), z.addEventListener("targetTouches", () => {
        V.classList.remove("active")
    }), Y.addEventListener("targetTouches", () => {
        V.classList.add("active")
    })
});