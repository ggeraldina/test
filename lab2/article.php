<!DOCTYPE html>
<html>
    <head>
        <link rel = "stylesheet" type = "text/css" href = "./style.css">
    	<meta name="viewport" content="width=device-width">
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    	<meta http-equiv="Content-Language" Content="ru">    	
    	<link rel="shortcut icon" href="./img/cornflowers_icon.png" type="image/x-icon">
    	<?php
            $mysqli = new mysqli("localhost", "geraldina", "", "database_lab2");
            $mysqli->set_charset('utf8');
            $query = "SELECT * FROM `articles` WHERE id=".$_POST['id'];
            $result = $mysqli->query($query)->fetch_array(MYSQLI_ASSOC); 
        ?>
    	<title><?php echo $result["title_html"]; ?></title>	 
    </head>
    <body id="up"> 
        <div class="basic">
            
        <!-- загрузить меню -->
		<script language= "JavaScript" src="./js/menu.js" type="text/javascript"></script>
        
        <!--content-->
        <div class="text" >
        <div id="text" class="closeMenu_text">
            
        <h1><?php echo $result["title"]; ?></h1>
        
        <?php echo $result["content"]; ?> 
            
            
        <p>--</p>
        <p class="srcLink">
            <a href=<?php echo $result["link"]; ?>>© <?php echo $result["link"]; ?></a>
        </p>    
            
        </div>
        </div>
        
        <!--открытие menuMob по клику, -->
        <!--(!)выполняется после html, когда известны id -->
		<script language= "JavaScript" src="./js/menuMob.js" type="text/javascript"></script>
        
        <!--загрузить стрелку наверх-->
        <script language= "JavaScript" src="./js/arrowUp.js" type="text/javascript"></script>
        
        <!--загрузить подвал сайта-->
        <script language= "JavaScript" src="./js/pageFooter.js" type="text/javascript"></script>
        
        </div>
    </body>
</html>