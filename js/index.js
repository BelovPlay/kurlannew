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
let btn=document.getElementById('btn');
let block=document.getElementById('block');
let content=document.getElementById('content');
let plus=document.getElementById('plus');
let minus=document.getElementById('minus');
let kolvo=document.getElementById('kolvo');
let buybtn=document.getElementById('buybtn');
let sum;
let price=2000;
btn.addEventListener('click',function(){
    block.style.display='block';
    content.style.display='block';
})
btn.addEventListener('dblclick',function(){
    block.style.display='none';
    content.style.display='none';
})
plus.addEventListener('click',function(){
    event.preventDefault();
    kolvo.value=Number(kolvo.value)+1;
    if(Number(kolvo.value>50)){
        plus.disabled='true';
    }
    sum=price*(Number(kolvo.value));
})
minus.addEventListener('click',function(){
    event.preventDefault();
    kolvo.value=Number(kolvo.value)-1;
    if(Number(kolvo.value)<1){
        minus.disabled='true';
        if(Number(kolvo.value>0)){
            minus.disabled='false';
        }
        sum=price*(Number(kolvo.value));
        alert(sum);
    }
})
let percent;
buybtn.addEventListener('click',function(){
    event.preventDefault();
    sum=price*(Number(kolvo.value));
    alert('Сумма билетов без скидки:'+sum+' рублей');
    alert('Количество билетов для покупки:'+Number(kolvo.value)+' шт');
    percent=sum/100*(Number(kolvo.value));
    alert('Размер скидки: '+percent+' рублей');
    alert('Итоговая стоимость билетов:'+(Number(sum-percent))+' рублей');
})