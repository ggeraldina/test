// открытие menuMob по клику 
// !скрипт должен выполняется после html
var menuLink = document.getElementById('mainLink');
var menu = document.getElementById('menu');
menuLink.onclick = function() {
    if(menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.classList.toggle('close');
        return false;
    }
    else {
        menu.classList.remove('close');
        menu.classList.toggle('open');
        return false;
    }
};

