<?php
include "modules/form.php";
?>
<!Doctype html>
<html lang="ru">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <meta name="keywords" content=""/>
    <meta name="description" content=""/>
    <meta name="author" content=""/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="images/favicon.png" type="image/x-icon">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/mystyle.min.css">
    <title>МЦ «ЖИЗНЬ»</title>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
<body>
	<div class="s-conteiner">
	    <div class="row">
	        <div class="cols col6 logo-box">
                <div class="logo-box__logo">
                    <img src="images/logo.svg" alt="" />
                </div>
            </div>
	        <div class="cols col6">
                <div class="phone-top">
                    <p class="phone-top__adres phone-top__adres_big">МНОГОКАНАЛЬНЫЙ ТЕЛЕФОН</p>
                    <p class="phone-top__kod-goroda">+7 (3852) <span class="phone-top__kod-goroda phone-top__number">50-03-03</span>
					    </p>
					    <p class="phone-top__adres phone-top__adres_relative">
					    г. Барнаул, ул.&nbsp;Партизанская,&nbsp;169</p>
                </div>
            </div>
	    </div>
	    <div class="row">
	        <div class="cols col12 slogan-box">
                <h1 class="slogan-box__slogan">Ваш верный шаг <br>к здоровой жизни!</h1>
	        </div>
	        <div class="cols col12 price-box">
                <div class="price-box__price"></div>
	        </div>
          <div class="cols col12 slogan-box">
	            <h2 class="pardon__title">Приносим свои извинения!</h2><br>
            <p class="pardon__paragraf">В связи с реконструкцией сайта
            не вся информация актуальна.<br/>
            По любому вопросу можно звонить по телефону 50-03-03.<br/>
            Ответим на email:<a class="link" href="mailto:info@500303.ru"> info@500303.ru</a>
            </p> <br/>
	        </div>
	    </div>
	    <div class="row">
	        <div class="form-box">
                <form class="form-box__form validate" action="script/form.php" method="post" id="top_form">
					<h2 class="form-box__zagolovok">Закажите звонок!</h2>
					<h2 class="form-box__podzagolovok">Отправте свой номер телефона и наш менеджер свяжится с Вами в ближайшее время. </h2>
					<span class="form-box__input-name">Введите Ваше имя</span>
					<input class="form-box__input" type="text" placeholder="" name="name" required>
					<span class="form-box__input-name">Номер телефона</span>
					<input class="form-box__input" type="tel" placeholder="+7" name="phone" required>
<!--                    <input class="form-box__input" type="text" name="coments" value="коментарий">-->
					<input class="form-box__submit" type="submit" value="Заказать звонок!" name="submit">
				</form>
	        </div>
	    </div>
        <div class="row contacts-box">
				    <div class="cols col4 contacts-box__contacts">
                        <p class = "contacts-box__zagolovok">
                        Наши контакты</p>
                        <h1 class = "contacts-box__podzagolovok contacts-box__podzagolovok_bold">                        Медицинский центр «ЖИЗНЬ»</h1>
                        <p class = "contacts-box__podzagolovok contacts-box__podzagolovok_bold">                        Адрес:</p>
                        <p class = "contacts-box__podzagolovok">
                        г. Барнаул <br>ул. Партизанская, 169</p>
                        <p class = "contacts-box__podzagolovok contacts-box__podzagolovok_bold">                        Телефон:</p>
                        <p class = "contacts-box__podzagolovok">                        +7 (3852) 50-03-03</p>
                        <p class = "contacts-box__podzagolovok contacts-box__podzagolovok_bold">                        Почта:</p>
                        <p class = "contacts-box__podzagolovok">                        e-mail: <a href="mailto:info@500303.ru" class="link">info@500303.ru</a></p>
                        <div class="contacts-box__social-icons">
                          <a href="https://vk.com/club131352162" target="_blank"><img src="images/vk.svg" alt=""></a>
                        </div>
				    </div>
				    <div class="cols col8 contacts-box__maps">
                        <div id="map"></div>

				    </div>
        </div>
        <div class="row">
            <div class="cols col12 s-footer">
                <div class="s-footer__license">Лицензия № ЛО-22-01-004076</div>
            </div>
        </div>
	</div>
<script src="https://maps.api.2gis.ru/2.0/loader.js?pkg=full"></script>
<script type="text/javascript" src="script/scripts.min.js"></script>
<!-- <script>window.jQuery || document.write('<script src="script/jquery.js"><\/script>')</script> -->
</body>
</html>
