let modalPreCalc=document.getElementById('modalPrecalc');
let closetestf=document.getElementById('closetestf');
closetestf.addEventListener('click',function(){
	modalPreCalc.style.display='none';
});
let modalDescrBlock=document.getElementById('ModalDescrBlock');
let closetests=document.getElementById('closeModalDescrCalc');
closetests.addEventListener('click',function(){
	modalDescrBlock.style.display='none';
})
let =document.getElementById('');
// let closetestt=document.getElementById('closetestt');
// closetestt.addEventListener('click',function(){

// })
document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelectorAll(".header__phone"),
        t = document.querySelector("span.header__phone-text");
    e.forEach(o => {
        // o.addEventListener("mousemove", () => {
        //     o.innerHTML = '\n            <span class="header__phone-arrow">&#8594;</span>\n<span  class="header__phone-text">Купить билет</span>', e.append(t)
        // }), o.addEventListener("mouseout", () => {
        //     o.innerHTML = '\n              <span class="header__phone-arrow">&#8594;</span>\n<span  class="header__phone-text">Купить билет</span>', e.append(t)
        // })
    });
    const o = document.querySelector(".modal-menu"),
        s = document.querySelector(".modal-tubing"),
        i = document.querySelector(".modal-faq"),
        u = document.querySelector(".modal-krl"),
        k = document.querySelector(".modal-open-tubing"),
        K = document.querySelector(".modal-open-tubing-sec");
        q = document.querySelector(".open-modal-faq"),
        b = document.querySelector(".open-modal-buy"),
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
    K.addEventListener("click", e => {
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
// Скрипт для расчета стоимости и формы покупки билетов
let btn=document.getElementById('btn');
let block=document.getElementById('block');
let content=document.getElementById('content');
let plus=document.getElementById('plus');
let minus=document.getElementById('minus');
let kolvo=document.getElementById('kolvo');
let buybtn=document.getElementById('buybtn');
let sum,percent;
let inpsum=document.getElementById('sum');
let price=2000;
let numticket=680;
let skidka=document.getElementById('percent');
let prsch,tmp,tmps;
// btn.addEventListener('click',function(){
//     event.preventDefault();
//     modalPreCalc.style.display='block';
//     content.style.display='block';
// })
plus.addEventListener('click',function(){
    event.preventDefault();
    kolvo.value=Number(kolvo.value)+1;
    inpsum.value=price*(Number(kolvo.value));
    skidka.value=(Number(kolvo.value));
    if(Number(kolvo.value<31)){
        percent=inpsum.value/100*(Number(kolvo.value));
        skidka.value+='%';
    }else{
        skidka.value=30;
        skidka.value+='%';
        percent=inpsum.value/100*30;
    }
    inpsum.value=(Number(inpsum.value-percent))+' рублей';
})
minus.addEventListener('click',function(){
    event.preventDefault();
    kolvo.value=Number(kolvo.value)-1;
    inpsum.value=price*(Number(kolvo.value))*1;
    skidka.value=(Number(kolvo.value))-1;
    console.log(kolvo.value);
    if(Number(kolvo.value<31)){
        percent=inpsum.value/100*(Number(kolvo.value));
        skidka.value=(Number(kolvo.value));
        skidka.value+='%';
    }else{
        percent=inpsum.value/100*30;
        skidka.value=30;
        skidka.value+='%';
    }
    if(kolvo.value<1){
        kolvo.value=1;
        skidka.value=kolvo.value;
        skidka.value+='%';
        inpsum.value=1980;
    }
    inpsum.value=(Number(inpsum.value-percent))+' рублей';
    // kolvo.value=Number(kolvo.value)-1;
    // skidka.value=Number(kolvo.value);
    // skidka.value+='%';
    // percent=inpsum.value;
    // console.log(percent);
    // inpsum.value=price*(Number(kolvo.value));
    // if(kolvo.value<1){
    //     kolvo.value=1;
    // }
    // if(Number(kolvo.value)>30){
    //     skidka.value=30;
    //     skidka.value+='%';
    // }else{
    //     kolvo.value=Number(kolvo.value)-1;
    //     skidka.value=(Number(kolvo.value));
    //     skidka.value+='%';
    //     percent=Number(inpsum.value/100*(Number(kolvo.value)));
    //     alert(percent);
    // }
    // if(Number(kolvo.value)<=1){
    //     kolvo.value=1;
    // }
    // inpsum.value=(Number(inpsum.value-percent))+' рублей';
})
// Скрипт для кнопок до/после новогодних праздников
let btnng=document.getElementById('btn-modal-priceng');
let btnpng=document.getElementById('btn-modal-pricepng');
let modalng=document.getElementById('modal-priceng');
let modalpng=document.getElementById('modal-pricepng');
let priceng=document.getElementById('price-infong');
let pricepng=document.getElementById('price-infopng');
btnng.addEventListener('click',function(){
    modalng.style.display='block';
    modalng.classList.add('overlay');
})
btnpng.addEventListener('click',function(){
    modalpng.style.display='block';
    modalpng.classList.add('overlay');
})
priceng.addEventListener('click',function(){
    event.preventDefault();
})
pricepng.addEventListener('click',function(){
    event.preventDefault();
})
let closemodalpng=document.getElementById('closemodalpng');
closemodalpng.addEventListener('click',function(){
    modalpng.style.display='none';
})
let closemodalng=document.getElementById('closemodalng');
closemodalng.addEventListener('click',function(){
    modalng.style.display='none';
})
// let modalcalc=document.getElementById('TicketsTestData');
// let closemodalcalc=document.getElementById('closeCalcModal');
// let closemodalf=document.getElementById('closeModalFormF');
// let closemodals=document.getElementById('closeModalFormS');
// modalcalc.addEventListener('click',function(){
//     event.preventDefault();
//     block.style.display='none';
//     content.style.display='none';
//     modalcalc.style.display='none';
//     closemodalf.style.display='none';
//     closemodals.style.display='none';
//     block.style.display='none';
// })
// let closemodalprecalc=document.getElementById('closeModalPrecalc');
// let calcPreModal=document.getElementById('modalPrecalc');
// closemodalprecalc.addEventListener('click',function(){
//     calcPreModal.style.display='none';
// })
let ModalDescrBlock=document.getElementById('ModalDescrBlock');
let btnmore=document.getElementById('btnmore');
btnmore.addEventListener('click',function(){
    event.preventDefault();
	ModalDescrBlock.style.display='block';
})
let questionmodal=document.getElementById('opencalcmodal');
questionmodal.addEventListener('click',function(){
    event.preventDefault();
	block.style.display='block';
})
let buybtnprecalc=document.getElementById('buybtnprecalc');
buybtnprecalc.addEventListener('click',function(){
    event.preventDefault();
	block.style.display='block';
})