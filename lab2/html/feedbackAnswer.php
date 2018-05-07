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
            <div id="formAnswer">
            <?php
				$link = mysql_connect("localhost", "geraldina", "") or die("Невозможно подключение к MySQL" . mysql_error($link));
				mysql_select_db("database_lab2");
				mysql_query("set names 'utf8';");
				$name = $_POST['name'];
				$theme = $_POST['theme'];
				$email = $_POST['email'];
				$message = $_POST['message'];
				echo "</br>";
				if(empty($name) and empty($theme) and empty($message) and empty($email)){
					echo "Предупреждение: Вы не заполнили ни одно поле формы.";
					echo "</br>";echo "</br>";
				}
				elseif(empty($email)){
					echo "Предупреждение: Не введен email. Мы не сможем ответить на Ваше сообщение.";
					echo "</br>";echo "</br>";
					$sql = "INSERT INTO feedback (name, theme, email, message) VALUES ('".$name."', '".$theme."', '".$email."', '".$message."')";
				// 	echo "name=".$name;echo "</br>";
				// 	echo "theme=".$theme;echo "</br>";
				// 	echo "message=".$message;echo "</br>";
				// 	echo "email=".$email;echo "</br>";
				}
				else {
					$sql = "INSERT INTO feedback (name, theme, email, message) VALUES ('".$name."', '".$theme."', '".$email."', '".$message."')";
				}
				if(mysql_query($sql)){
					echo "Письмо отправлено";
				}
				else {
					echo "Письмо не отправлено";
					echo "</br>";
				}
				mysql_close ( $link );
				echo '</br>';
			?>
			
	        <form class="form" action="feedback.php" method="post">
            <br>
               <input id="feedbackButton" type="submit" value="Новое письмо"/>
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