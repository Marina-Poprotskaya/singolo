const MENU = document.getElementById('menu');                                   // Менюшка

MENU.addEventListener('click', function (event) {
    MENU.querySelectorAll('li > a').forEach(function (elem) {
        elem.classList.remove('active')
        event.target.classList.add('active')
    });
});


(function () {                                                                   // Слайдер

    const sliderInIt = function (slider) {

        let sliders = slider.querySelectorAll('div.slider-phone');

        sliders[0].classList.add('active-slider');

        let ArrowNext = document.createElement('div');
        ArrowNext.classList.add('right');

        let ArrowPrev = document.createElement('div');
        ArrowPrev.classList.add('left');

        slider.appendChild(ArrowNext);
        slider.appendChild(ArrowPrev);

        ArrowNext.addEventListener('click', function () {
            let activeElem = slider.querySelector('div.active-slider');

            if (activeElem != null) {
                activeElem.classList.remove('active-slider');
                let nextElem = activeElem.nextElementSibling.classList.add('active-slider');
                if (!nextElem) {
                    activeElem.classList.remove('active-slider');
                    activeElem.previousElementSibling.classList.add('active-slider');
                }
            }
        });

        ArrowPrev.addEventListener('click', function () {
            let activeElem = slider.querySelector('div.active-slider');

            if (activeElem != null) {
                activeElem.classList.remove('active-slider');
                let nextElem = activeElem.nextElementSibling.classList.add('active-slider');
                if (!nextElem) {
                    activeElem.classList.remove('active-slider');
                    activeElem.previousElementSibling.classList.add('active-slider');
                }
            }
        });

    };

    this.slider = function (selector) {

        let slider = document.querySelector(selector);

        if (!slider) {
            console.log('Slider not found');
            return false;
        }

        sliderInIt(slider);
    };
}());
slider('#slider');






const phoneFirst = document.getElementById('phone-first');                    //Выключение экрана
let verScreen = document.getElementById('first')

phoneFirst.addEventListener('click', function (event) {
    verScreen.classList.toggle('turn-on');
})

const phoneSecond = document.getElementById('phone-second');
let horScreen = document.getElementById('second')

phoneSecond.addEventListener('click', function (event) {
    horScreen.classList.toggle('turn-on');
})





const TAGS = document.getElementById('tags');                                     // Блок с портфолио
const PORTFOLIO = document.getElementById('portfolio_wrap');
let ROW = PORTFOLIO.querySelectorAll('.portfolio__photo');

TAGS.addEventListener('click', function (event) {
    let target = event.target;
    if (target.tagName != "SPAN") return;

    TAGS.querySelectorAll('span').forEach(elem => {

        elem.classList.remove('tag_selected');
        target.classList.add('tag_selected');

        let arr = [0, 1, 2, 3];
        let arrRandom = [];
        for (let i = 0; i < arr.length; i++) {
            let numRandom = Math.ceil(Math.random() * arr.length - 1);
            arrRandom.push(arr.splice(numRandom, 1));
        }
        let i = 0;
        ROW.forEach(element => {  
            element.style.order = arrRandom[i];
            i++;
        })
    });
});





let selectedImg;                                                                  //Бордер на картинках
PORTFOLIO.addEventListener('click', function(event) {
    let target = event.target;
    if (target.tagName != "IMG") return;
    getBorder(target);
});

function getBorder(img) {
if (selectedImg) {
    selectedImg.classList.remove('img-border')
}
selectedImg = img;
    selectedImg.classList.add('img-border')

}



