const MENU = document.getElementById('menu');                                   // Менюшка

MENU.addEventListener('click', function (event) {
    MENU.querySelectorAll('li > a').forEach(function (elem) {
        elem.classList.remove('active')
        event.target.classList.add('active')
    });
});




document.addEventListener('scroll', onScroll);                                    //Scroll

function onScroll() {
    let curPos = window.scrollY+document.getElementById('home').offsetHeight;
    let divs = document.querySelectorAll('.scroll');
    let links = document.querySelectorAll('#menu a');
    divs.forEach(function (elem) {
        if (elem.offsetTop <= curPos && (elem.offsetTop + elem.offsetHeight) > curPos) {
            links.forEach(function (a) {
                a.classList.remove('active');
                if (a.getAttribute('href').substring(1) === elem.getAttribute('id')) {
                    a.classList.add('active');
                }             
            });
        };
    });
};



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
            let nextElem = activeElem.nextElementSibling;

            if (activeElem != null) {
                if (nextElem.classList.contains('slider-phone')) {
                    activeElem.classList.remove('active-slider');
                    nextElem.classList.add('active-slider');
                }
                else {
                    activeElem.classList.remove('active-slider');
                    sliders[0].classList.add('active-slider');
                }
            }
            if (document.querySelector('.active-slider').classList.contains('first')) {
                document.getElementById('slider').style.backgroundColor = '#f06c64';
           } else {
                document.getElementById('slider').style.backgroundColor = '#648BF0'
           }
        });

        ArrowPrev.addEventListener('click', function () {
            let activeElem = slider.querySelector('div.active-slider');
            let prevElem = activeElem.previousElementSibling;
            if (activeElem != null) {
                if (!prevElem) {
                    activeElem.classList.remove('active-slider');
                    sliders[sliders.length - 1].classList.add('active-slider');
                }
                else if (prevElem.classList.contains('slider-phone')) {

                    activeElem.classList.remove('active-slider');
                    prevElem.classList.add('active-slider');
                }
                else {
                    activeElem.classList.remove('active-slider');
                    sliders[sliders.length - 1].classList.add('active-slider');
                }
            }
            if (document.querySelector('.active-slider').classList.contains('first')) {
                document.getElementById('slider').style.backgroundColor = '#f06c64';
           } else {
                document.getElementById('slider').style.backgroundColor = '#648BF0'
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

verScreen.addEventListener('click', function (event) {
    verScreen.classList.remove('turn-on');
});


const phoneSecond = document.getElementById('phone-second');
let horScreen = document.getElementById('second')

phoneSecond.addEventListener('click', function (event) {
    horScreen.classList.toggle('turn-on');
})

horScreen.addEventListener('click', function (event) {
    horScreen.classList.remove('turn-on');
});






const TAGS = document.getElementById('tags');                                      // Блок с портфолио
const PORTFOLIO = document.getElementById('portfolio_wrap');
let ROW = PORTFOLIO.querySelectorAll('.portfolio__photo');


TAGS.addEventListener('click', function (event) {
    let target = event.target;
    if (target.tagName != "SPAN") return;


    TAGS.querySelectorAll('span').forEach(elem => {

        elem.classList.remove('tag_selected');
    })
        target.classList.add('tag_selected');


        ROW.forEach(elem => {
            let arrImg = Array.from(elem.querySelectorAll('img'));
            arrImg.sort(() => Math.random() - 0.5);
            elem.innerHTML='';
            arrImg.forEach(el => {
            elem.appendChild(el);       
        }) 
    });
});





let selectedImg;                                                                  //Бордер на картинках
PORTFOLIO.addEventListener('click', function (event) {
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




const button = document.getElementById('btn');                                      //pop-up окошко
const close_button = document.getElementById('close-btn');
const form = document.getElementById('form');


form.addEventListener('submit', function (event) {
    event.preventDefault();
    const subject = document.getElementById('subject').value.toString();
    const textarea = document.getElementById('textarea_message').value.toString();
    if (subject == '' && textarea == '') {
        document.getElementById('result').innerHTML = 'Письмо отправлено <br/> Без темы <br/> Без описания';
    } else if (subject == '') {
        document.getElementById('result').innerHTML = 'Письмо отправлено <br/> Без темы  <br/> Описание: ' + textarea;
    } else if (textarea == '') {
        document.getElementById('result').innerHTML = 'Письмо отправлено <br/> Тема: ' + subject + '<br/> Без описания';
    } else document.getElementById('result').innerHTML = 'Письмо отправлено <br/> Тема: ' + subject + '<br/> Описание: ' + textarea;
    document.getElementById('pop-up_form').classList.remove('hidden');
});

close_button.addEventListener('click', function () {
    form.reset();
    console.log(result);
    document.getElementById('pop-up_form').classList.add('hidden')
});







