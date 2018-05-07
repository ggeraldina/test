<!DOCTYPE html>
<html>
    <head>
        <link rel = "stylesheet" type = "text/css" href = "./style.css">
    	<meta name="viewport" content="width=device-width">
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    	<meta http-equiv="Content-Language" Content="ru">    	
    	<link rel="shortcut icon" href="./img/cornflowers_icon.png" type="image/x-icon">
    	<title>Cornflowers</title>	 
    </head>
    <body id="up"> 
        <div class="basic">
            
        <!--+Script меню -->
        <div class = "menu closeMenu" id = "menu">
        <ul>
        <!--Васильки.рф-->
        <li class = "activeLink">
            <a href="./index.php" id="titleLink" onclick="menuLink.onclick()">
            <img src = "./img/cornflowers_icon_light.png" alt = " kartinka :-)">
            <div>Васильки.рф</div>
            </a>
        </li>
        <!--Главная-->
        <li>
            <a href="./index.php">
            <div>Главная</div>
            </a>
        </li>
        <!--Фотогалерея-->
        <li>
            <a href="./photogallery.php" >
            <div>Фотогалерея</div>
            </a>
        </li>
        <!--Статьи-->
        <li>
            <a href="./articles.php">
            <div>Статьи</div>
            </a>
        </li>
        <!--Обратная связь-->
        <li>
            <a href="./feedback.php">
            <div>Обратная связь</div>
            </a>
        </li>
        </ul>
        </div> <!-- #end: class = "menu closeMenu" id = "menu"-->
        
        <div id=menuBottom class="menuBottom  closeMenuBottom"></div>
        
        <!--content-->
        <div class="text" >
        <div id="text" class="closeMenu_text">
            
        <h1>Что так же прекрасно, как васильки?</h1>
        
        <h2>Может быть, васильки?! :)</h2>
        
        <div class="imgCenter">
            <img src="https://w-dog.ru/wallpapers/11/11/536775997875675/chashka-cvety-vasilki-makro.jpg">
        </div>
        
        </div>
        </div>
        
        <!--открытие menuMob по клику, -->
        <!--(!)выполняется после html, когда известны id -->
		<script language= "JavaScript" src="./js/menuMob.js" type="text/javascript"></script>
        
        <!--+Script стрелкa наверх-->
        <div class="arrowUp">
            <div>
                <a href="#up"><img src="./img/arrow.png"></img></a>            
            </div>
        </div>
        
        <!--загрузить подвал сайта-->
        <script language= "JavaScript" src="./js/pageFooter.js" type="text/javascript"></script>
        
        </div>
    </body>
</html>