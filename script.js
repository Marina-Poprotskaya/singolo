const MENU = document.getElementById('menu');

MENU.addEventListener('click', function(event){
    MENU.querySelectorAll('li > a').forEach(function(elem) {
        elem.classList.remove('active')
        event.target.classList.add('active')
    });
});


(function() {

    const sliderInIt = function(slider) {

        let sliders = slider.querySelectorAll('div.slider-phone');

        sliders[0].classList.add('active-slider');

        let ArrowNext = document.createElement('div');
        ArrowNext.classList.add('right');

        let ArrowPrev = document.createElement('div');
        ArrowPrev.classList.add('left');

        slider.appendChild(ArrowNext);
        slider.appendChild(ArrowPrev);

        ArrowNext.addEventListener('click', function(){
            let activeElem = slider.querySelector('div.active-slider');

            if(activeElem !=null) {
                activeElem.classList.remove('active-slider');
                let nextElem = activeElem.nextElementSibling.classList.add('active-slider');
                if(nextElem == null) {
                    activeElem.classList.remove('active-slider');
                    activeElem.previousElementSibling.classList.add('active-slider');
                }
            }
        });

        ArrowPrev.addEventListener('click', function(){
            let activeElem = slider.querySelector('div.active-slider');

            if(activeElem !=null) {
                activeElem.classList.remove('active-slider');
                let nextElem = activeElem.nextElementSibling.classList.add('active-slider');
                if(nextElem == null) {
                    activeElem.classList.remove('active-slider');
                    activeElem.previousElementSibling.classList.add('active-slider');
                }
            }
        });

    };

    this.slider = function(selector){
        
        let slider = document.querySelector(selector);

        if (!slider) {
            console.log ('Slider not found');
            return false;
        }

        sliderInIt(slider); 
    };
}());
slider('#slider');






const phoneFirst = document.getElementById('phone-first');
let verScreen = document.getElementById('first')

phoneFirst.addEventListener('click', function(event) {
    verScreen.classList.toggle('turn-on');
})


const phoneSecond = document.getElementById('phone-second');
let horScreen = document.getElementById('second')

phoneSecond.addEventListener('click', function(event) {
    horScreen.classList.toggle('turn-on');
})




