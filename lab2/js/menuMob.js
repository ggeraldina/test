// открытие menuMob по клику 
// !скрипт должен выполняется после html
var menuLink = document.getElementById('titleLink');
var menu = document.getElementById('menu');
var menuBottom = document.getElementById('menuBottom');
var text = document.getElementById('text');
menuLink.onclick = function() {
    if(menu.classList.contains('openMenu')) {
        menu.classList.remove('openMenu');
        menu.classList.toggle('closeMenu');
        menuBottom.classList.remove('openMenuBottom');
        menuBottom.classList.toggle('closeMenuBottom');
        text.classList.remove('openMenu_text');
        text.classList.toggle('closeMenu_text');
        return false;
    }
    else {
        menu.classList.remove('closeMenu');
        menu.classList.toggle('openMenu');
        menuBottom.classList.remove('closeMenuBottom');
        menuBottom.classList.toggle('openMenuBottom');
        text.classList.remove('closeMenu_text');
        text.classList.toggle('openMenu_text');
        return false;
    }
    
};


