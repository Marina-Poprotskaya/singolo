const MENU = document.getElementById('menu');

MENU.addEventListener('click', function(event){
    MENU.querySelectorAll('li > a').forEach(function(elem) {
        elem.classList.remove('active')
        event.target.classList.add('active')
    });
});


