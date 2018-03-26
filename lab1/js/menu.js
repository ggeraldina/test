// Меню (есть на всех страницах)

// <!-- меню-->
//         <div class = "menu closeMenu" id = "menu">
document.write('<div class = "menu closeMenu" id = "menu">');
//     		<ul>
document.write('<ul>');

// Васильки.рф
//     			<li>
if (document.title == "Cornflowers"){
	document.write('<li class = "activeLink">');
	}
else{
	document.write('<li>');
}
//     			    <a href="index.html" id="titleLink" onclick="menuLink.onclick()" >
document.write('<a href="index.html" id="titleLink" onclick="menuLink.onclick()">');
//     			        <img src = "img/cornflowers_icon_light.png" alt = " kartinka :-)" >
document.write('<img src = "img/cornflowers_icon_light.png" alt = " kartinka :-)">');
//     			        <div>Васильки.рф</div>
document.write('<div>Васильки.рф</div>');
//     			    </a>
document.write('</a>');
// 			    </li>
document.write('</li>');

// Главная
// 			    <li><a href="index.html"><div>Главная</div></a></li>
if (document.title == "Cornflowers"){
	document.write('<li class = "activeLink">');
	}
else{
	document.write('<li>');
}
document.write('<a href="index.html">');
document.write('<div>Главная</div>');
document.write('</a>');
document.write('</li>');

// Фотогалерея
// 			    <li><a href="photogallery.html" ><div>Фотогалерея</div></a></li>
if (document.title == "Photogallery"){
	document.write('<li class = "activeLink">');
	}
else{
	document.write('<li>');
}
document.write('<a href="photogallery.html" >');
document.write('<div>Фотогалерея</div>');
document.write('</a>');
document.write('</li>');

// Статьи
//     			<li>
if (document.title == "Articles"){
	document.write('<li class = "activeLink">');
	}
else{
	document.write('<li>');
}
//     				<a href="articles.html"><div>Статьи</div></a>
document.write('<a href="articles.html">');
document.write('<div>Статьи</div>');
document.write('</a>');
// Подменю
//     				<ul  class="submenu" >
document.write('<ul  class="submenu" >');
//     					<li><a href=#><div>О васильках</div></a></li>
document.write('<li>');
document.write('<a href=#>');
document.write('<div>О васильках</div>');
document.write('</a>');
document.write('</li>');
//     					<li><a href=#><div>Выращивание и уход</div></a></li>
document.write('<li>');
document.write('<a href=#>');
document.write('<div>Выращивание и уход</div>');
document.write('</a>');
document.write('</li>');
//     				</ul>
document.write('</ul>');
//     			</li>
document.write('</li>');

// Обратная связь
//     			<li><a href="feedback.html"><div>Обратная связь</div></a></li>
if (document.title == "Feedback"){
	document.write('<li class = "activeLink">');
	}
else{
	document.write('<li>');
}
document.write('<a href="feedback.html">');
document.write('<div>Обратная связь</div>');
document.write('</a>');
document.write('</li>');
//     		</ul>
document.write('</ul>');
// 		</div>
document.write('</div>');
//         <div id=menuBottom class="menuBottom  closeMenuBottom"></div>
document.write('<div id=menuBottom class="menuBottom  closeMenuBottom"></div>');


// <!-- меню-->
//         <div class = "menu closeMenu" id = "menu">
//     		<ul>
//     			<li class = "activeLink">
//     			    <a href="index.html" id="titleLink" onclick="menuLink.onclick()" >
//     			        <img src = "img/cornflowers_icon_light.png" alt = " kartinka :-)" >
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