// Меню (есть на всех страницах)

// <!-- меню-->
document.write('<div class = "menu closeMenu" id = "menu">');
document.write('<ul>');

// Васильки.рф
if (document.title == "Cornflowers"){
	document.write('<li class = "activeLink">');
	}
else{
	document.write('<li>');
}
document.write('<a href="./index.php" id="titleLink" onclick="menuLink.onclick()">');
document.write('<img src = "./img/cornflowers_icon_light.png" alt = " kartinka :-)">');
document.write('<div>Васильки.рф</div>');
document.write('</a>');
document.write('</li>');

// Главная
if (document.title == "Cornflowers"){
	document.write('<li class = "activeLink">');
	}
else{
	document.write('<li>');
}
document.write('<a href="./index.php">');
document.write('<div>Главная</div>');
document.write('</a>');
document.write('</li>');

// Фотогалерея
if (document.title == "Photogallery"){
	document.write('<li class = "activeLink">');
	}
else{
	document.write('<li>');
}
document.write('<a href="./photogallery.php" >');
document.write('<div>Фотогалерея</div>');
document.write('</a>');
document.write('</li>');

// Статьи
switch (document.title) {
	case "Articles":
		document.write('<li class = "activeLink">');
		break;
	case "(RU) Cornflowers":
		document.write('<li class = "activeLink">');
		break;
	case "(RU) Description":
		document.write('<li class = "activeLink">');
		break;
	case "(RU) Species of plants":
		document.write('<li class = "activeLink">');
		break;
	case "(RU) Growing":
		document.write('<li class = "activeLink">');
		break;
	case "(RU) Benefit":
		document.write('<li class = "activeLink">');
		break;	
		
	default:
		document.write('<li>');
}
document.write('<a href="./articles.php">');
document.write('<div>Статьи</div>');
document.write('</a>');
document.write('</li>');

// Обратная связь
if (document.title == "Feedback"){
	document.write('<li class = "activeLink">');
	}
else{
	document.write('<li>');
}
document.write('<a href="./feedback.php">');
document.write('<div>Обратная связь</div>');
document.write('</a>');
document.write('</li>');

document.write('</ul>');
document.write('</div>');

document.write('<div id=menuBottom class="menuBottom  closeMenuBottom"></div>');
