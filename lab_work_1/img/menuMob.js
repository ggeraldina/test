//открытие menuMob по клику
var document.getElementById('mainLink').onclick() = function() {
    var menu = document.getElementsById('menu');
    if(menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.classList.add('close');
    }
    else {
        menu.classList.remove('close');
        menu.classList.add('open');
    }
};

