<!DOCTYPE html>
<html>
    <head>
        <link rel = "stylesheet" type = "text/css" href = "../html/style.css">
    	<meta name="viewport" content="width=device-width">
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    	<meta http-equiv="Content-Language" Content="ru">    	
    	<link rel="shortcut icon" href="../img/cornflowers_icon.png" type="image/x-icon">
    	<title>Photogallery</title>	 
    </head>
    <body id="up"> 
        <div class="basic">
            
        <!-- загрузить меню -->
		<script language= "JavaScript" src="../js/menu.js" type="text/javascript"></script>
        
        
        <!--content-->
        <div class="text" >
        <div id="text" class="closeMenu_text">
            
            
            
            <div class="text_column">
                <h1>Васильки бывают разные</h1>
                
                <?php
                $mysqli = new mysqli("localhost", "geraldina", "", "database_lab2");
                $query = "SELECT `url` FROM `photogallery`";
                $result = $mysqli->query($query); 
                while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                echo "<div class='column'>
                    <div class='columnDivPG'>
                        <a href=".$row["url"].">
                        <img class='columnImgPhoto' src=".$row["url"].">
                        </a>
                    </div>
                </div>";
                } ?>
            
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