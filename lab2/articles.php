<!DOCTYPE html>
<html>
    <head>
        <link rel = "stylesheet" type = "text/css" href = "./style.css">
        <meta name="viewport" content="width=device-width">
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    	<meta http-equiv="Content-Language" Content="ru">    	
    	<link rel="shortcut icon" href="./img/cornflowers_icon.png" type="image/x-icon">
    	<title>Articles</title>	 
    </head>
    <body id="up"> 
        <div class="basic">
            
        <!-- загрузить меню -->
		<script language= "JavaScript" src="./js/menu.js" type="text/javascript"></script>
        
        
        <!--content-->
        <div class="text" >
        <div id="text" class="closeMenu_text">
            
            <div class="text_column">
            
            <h1>Статьи по теме</h1>
            
            
            <?php
                $mysqli = new mysqli("localhost", "geraldina", "", "database_lab2");
                $mysqli->set_charset('utf8');
                $query = "SELECT * FROM `articles`";
                $result = $mysqli->query($query); 
                while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $_SESSION['data']=$row['id']; 
                echo 
                '<div class="column">
                    <div  class="columnDiv" >
                        <h2 class="columnTitle">'.$row['title'].'</h2>
                        <img class="columnImg" src="'.$row['img'].'">
                        <div class="columnText">
                            <div>
                                '.$row['annotation'].'
                            </div>
                               
                        </div>
                        <div class="columnLink">
                        <form action="article.php" method="post">
                            <input type="hidden" name="id" value="'.$row['id'].'"/>
                            <input type="submit" class="moreDetailed" value="Подробнее"/>
                        </form>
                        </div>
                    </div>
                </div>';
                } 
                mysqli_close($mysqli);
            ?>
        
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