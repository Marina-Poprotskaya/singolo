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






// function shuffle(ROW){                                    //СОРТИРОВКА???
// 	var j, temp;
// 	for(var i = ROW.length - 1; i > 0; i--){
// 		j = Math.floor(Math.random()*(i + 1));
// 		temp = ROW[j];
// 		ROW[j] = ROW[i];
// 		ROW[i] = temp;
// 	}
// 	return ROW;
// }
// console.log(ROW)


const TAGS = document.getElementById('tags');
const PORTFOLIO = document.getElementById('portfolio_wrap');
let ROW = PORTFOLIO.querySelectorAll('.portfolio__photo');
let ROW1 = ROW[0]

TAGS.addEventListener('click', function(event){
    TAGS.classList.remove('tag_selected');
    ROW1.classList.toggle('column');
    TAGS.querySelectorAll('span').forEach(elem => {
        
        elem.classList.remove('tag_selected');
        event.target.classList.add('tag_selected');

    });
});





const BORDER = document.querySelectorAll('#border');
BORDER.forEach(elem => {
        elem.addEventListener('click', function(event) {
        
            // elem.removeClass('img-border')
            console.log('elem')
           event.target.classList.toggle('img-border')
        })
})