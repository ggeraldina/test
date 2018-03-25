// Меню (есть на всех страницах)

// <!-- меню-->
//         <div class = "menu close" id = "menu">
document.write('<div class = "menu close" id = "menu">');
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
//     			        <img src = "img/cornflowers_icon.png" alt = " kartinka :-)" >
document.write('<img src = "img/cornflowers_icon.png" alt = " kartinka :-)">');
//     			        <div>Васильки.рф</div>
document.write('<div>Васильки.рф</div>');
//     			    </a>
document.write('</a>');
// 			    </li>
document.write('</li>');

// Главная
// 			    <li><a href="" id="mainLink"><div>Главная</div></a></li>
if (document.title == "Cornflowers"){
	document.write('<li class = "activeLink">');
	}
else{
	document.write('<li>');
}
document.write('<a href="" id="mainLink">');
document.write('<div>Главная</div>');
document.write('</a>');
document.write('</li>');

// Фотогалерея
// 			    <li><a href="" ><div>Фотогалерея</div></a></li>
if (document.title == ""){
	document.write('<li class = "activeLink">');
	}
else{
	document.write('<li>');
}
document.write('<a href="" >');
document.write('<div>Фотогалерея</div>');
document.write('</a>');
document.write('</li>');

// Статьи
//     			<li>
if (document.title == ""){
	document.write('<li class = "activeLink">');
	}
else{
	document.write('<li>');
}
//     				<a href=#><div>Статьи</div></a>
document.write('<a href=#>');
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
//     			<li><a href=""><div>Обратная связь</div></a></li>
if (document.title == ""){
	document.write('<li class = "activeLink">');
	}
else{
	document.write('<li>');
}
document.write('<a href="">');
document.write('<div>Обратная связь</div>');
document.write('</a>');
document.write('</li>');
//     		</ul>
document.write('</ul>');
// 		</div>
document.write('</div>');
//         <div class="menu_bottom"></div>
document.write('<div class="menu_bottom"></div>');


// <!-- меню-->
//         <div class = "menu close" id = "menu">
//     		<ul>
//     			<li class = "activeLink">
//     			    <a href="index.html" id="titleLink" onclick="menuLink.onclick()" >
//     			        <img src = "img/cornflowers_icon.png" alt = " kartinka :-)" >
//     			        <div>Васильки.рф</div>
//     			    </a>
// 			    </li>
// 			    <li class = "activeLink"><a href="" id="mainLink"><div>Главная</div></a></li>
// 			    <li><a href="" ><div>Фотогалерея</div></a></li>
//     			<li>
//     				<a href=#><div>Статьи</div></a>
//     				<ul  class="submenu" >
//     					<li><a href=#><div>О васильках</div></a></li>
//     					<li><a href=#><div>Выращивание и уход</div></a></li>
//     				</ul>
//     			</li>
//     			<li><a href=""><div>Обратная связь</div></a></li>
//     		</ul>
// 		</div>
//         <div class="menu_bottom"></div>