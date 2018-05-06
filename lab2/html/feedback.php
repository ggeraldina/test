<!DOCTYPE html>
<html>
    <head>
        <link rel = "stylesheet" type = "text/css" href = "../html/style.css">
        <meta name="viewport" content="width=device-width">
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    	<meta http-equiv="Content-Language" Content="ru">    	
    	<link rel="shortcut icon" href="../img/cornflowers_icon.png" type="image/x-icon">
    	<title>Feedback</title>	 
    </head>
    <body id="up"> 
        <div class="basic">
            
        <!-- загрузить меню -->
		<script language= "JavaScript" src="../js/menu.js" type="text/javascript"></script>
        
        
        <!--content-->
        <div class="text" >
        <div id="text" class="closeMenu_text">
            
            <h1>Обратная связь</h1>
            <div id="form">
            <form class="form" action="mailto:grushevskaya.d.v@yandex.ru" method="post" enctype="text/plain">
               <label>Ваше имя:</label>
               <br>
               <input type="text" name="name"/>
               <br>
               <label>Ваш E-mail адрес:</label>
               <br>
               <input type="email" name="address"/>
               <br>
               <label>Тема сообщения:</label>
               <br>
               <input type="text" name="theme"/>
               <br>
               <label>Сообщение:</label>
               <br>
               <textarea name="message" rows="5"></textarea>
               <br>
               <input id="feedbackButton" type="submit" value="Отправить"/>
            </form>
            </div>
            
        </div>
        </div>
        
        <!--открытие menuMob по клику, -->
        <!--(!)выполняется после html, когда известны id -->
		<script language= "JavaScript" src="../js/menuMob.js" type="text/javascript"></script>
        
        <!--загрузить стрелку наверх-->
        <script language= "JavaScript" src="../js/arrowUp.js" type="text/javascript"></script>
        
        <!--загрузить подвал сайта-->
        <script language= "JavaScript" src="../js/pageFooter.js" type="text/javascript"></script>
        
        </div>
    </body>
</html>