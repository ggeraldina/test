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
document.write('<a href="../index.php" id="titleLink" onclick="menuLink.onclick()">');
document.write('<img src = "../img/cornflowers_icon_light.png" alt = " kartinka :-)">');
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
document.write('<a href="../index.php">');
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
document.write('<a href="../html/photogallery.php" >');
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
	case "(EN) Centaurea cyanus":
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

document.write('<a href="../html/articles.php">');
document.write('<div>Статьи</div>');
document.write('</a>');
// Подменю
document.write('<ul  class="submenu" >');
//
if (document.title == "(RU) Cornflowers"){
	document.write('<li class = "activeSubLink">');
	}
else{
	document.write('<li>');
}
document.write('<a href="../articles/ru_cornflowers.php">');
document.write('<div>Василёк синий</div>');
document.write('</a>');
document.write('</li>');
//
// if (document.title == "(EN) Centaurea cyanus"){
// 	document.write('<li class = "activeSubLink">');
// 	}
// else{
// 	document.write('<li>');
// }
// document.write('<a href="../articles/en_centaurea_cyanus.php">');
// document.write('<div>(EN) Cornflower</div>');
// document.write('</a>');
// document.write('</li>');
//
if (document.title == "(RU) Description"){
	document.write('<li class = "activeSubLink">');
	}
else{
	document.write('<li>');
}
document.write('<a href="../articles/ru_description.php">');
document.write('<div>Описание растения</div>');
document.write('</a>');
document.write('</li>');

//
if (document.title == "(RU) Species of plants"){
	document.write('<li class = "activeSubLink">');
	}
else{
	document.write('<li>');
}
document.write('<a href="../articles/ru_speciesPlants.php">');
document.write('<div>Виды васильков</div>');
document.write('</a>');
document.write('</li>');

//
if (document.title == "(RU) Growing"){
	document.write('<li class = "activeSubLink">');
	}
else{
	document.write('<li>');
}
document.write('<a href="../articles/ru_growingCornflowers.php">');
document.write('<div>Выращивание и уход</div>');
document.write('</a>');
document.write('</li>');

//
if (document.title == "(RU) Benefit"){
	document.write('<li class = "activeSubLink">');
	}
else{
	document.write('<li>');
}
document.write('<a href="../articles/ru_benefitsCornflower.php">');
document.write('<div>Польза васильков</div>');
document.write('</a>');
document.write('</li>');

document.write('</ul>');
document.write('</li>');

// Обратная связь
if (document.title == "Feedback"){
	document.write('<li class = "activeLink">');
	}
else{
	document.write('<li>');
}
document.write('<a href="../html/feedback.php">');
document.write('<div>Обратная связь</div>');
document.write('</a>');
document.write('</li>');

document.write('</ul>');
document.write('</div>');

document.write('<div id=menuBottom class="menuBottom  closeMenuBottom"></div>');


// <!-- меню-->
//         <div class = "menu closeMenu" id = "menu">
//     		<ul>
//     			<li class = "activeLink">
//     			    <a href="index.html" id="titleLink" onclick="menuLink.onclick()" >
//     			        <img src = "../img/cornflowers_icon_light.png" alt = " kartinka :-)" >
//     			        <div>Васильки.рф</div>
//     			    </a>
// 			    </li>
// 			    <li class = "activeLink"><a href="index.html"><div>Главная</div></a></li>
// 			    <li><a href="photogallery.html" ><div>Фотогалерея</div></a></li>
//     			<li>
//     				<a href="articles.html"><div>Статьи</div></a>
//     				<ul  class="submenu" >
//     					<li><a href=#><div>О васильках</div></a></li>
//     					<li><a href=#><div>Выращивание и уход</div></a></li>
//     				</ul>
//     			</li>
//     			<li><a href="feedback.html"><div>Обратная связь</div></a></li>
//     		</ul>
// 		</div>
//         <div id=menuBottom class="menuBottom closeMenuBottom"></div>