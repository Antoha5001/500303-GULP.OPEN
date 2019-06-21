<?php
include_once("m/model.php");
include_once("c/Controler/Pages.php");
//	include "modules/form.php";
//	require_once("modules/form.php");
$id = $_GET['id'] ?? null;
?>


<?php
	include "includes/header.php";

?>
<?php


	//	$id = $_GET["id"] ?? null;

	//	if ($id === null ){
	//
	//        include "includes/404.php";
	//    }

	//	switch ($id) {
	//		case "page1":
	//			include "includes/agreement.php";
	//			break;
	//		case "photos":
	//			include "includes/test.php";
	//			break;
	//		default:
	//			include "includes/home.php";
	//	}
	if (count($_GET) == 0) {

		include "includes/home.php";
	} else{
		if(count($data->xpath("/pages/child::page[@id = '$id']")) > 0){
			include "includes/$id.php";
		} else{
			include "includes/404.php";
		}
	}
?>

</div>
<div class="container-fluid form-box">
	<div class="container">
		<div class="row">
			<div class="col col-lg-12 ">
				<div class="form-box__form">
					<div class="nurse-box">
						<img src="images/nurse.png" alt="">
					</div>
					<div class="field-box">
						<form class=" validate" action="" method="post" id="top_form">
							<h3 class="form-box__zagolovok">Закажите звонок!</h3>
							<p class="form-box__podzagolovok">Отправте свой номер телефона и наш менеджер <br>свяжится с
								Вами в
								ближайшее время. </p>

							<!--Name input -->
							<div class="form-box__input-wrapper">
								<label for="form_name" class="form-box__input-name">Как к вам обращаться</label>
								<input class="form-box__input" type="text" placeholder="" name="name" id="form_name"
									   data-error="Не верный формат записи!">
								<div class="message">Вы не ввели имя!</div>
							</div>

							<!--Phone input -->
							<div class="form-box__input-wrapper">
								<label for="form_phone" class="form-box__input-name">Номер телефона</label>
								<input class="form-box__input" type="tel" placeholder="+7" name="phone" id="form_phone"
									   data-error="">
								<div class="message">Вы не указали телефон!</div>
							</div>

							<!--Checkbox input -->
							<div class="form-box__input-wrapper">
								<label for="agreed" class="form-box__agreed">Я принимаю <a href="index.php?id=agreement">условия
										на
										обработку персональных
										данных!</a></label>
								<input type="checkbox" name="agreed" id="agreed">
								<div class="message">Вы не приняли соглашение!</div>
							</div>

							<!--Button-->
							<div class="">
								<!--									<label class="form-legend"></label>-->
								<input type="submit" class="form-box__submit" value="Заказать звонок!"
									   id="form-box__submit">
							</div>
							<!--							<input class="form-box__submit" type="submit" value="Заказать звонок!" name="submit">-->
						</form>
					</div>

				</div>

			</div>
		</div>

	</div>
</div>

<?php
//if (isset($_GET['id'])){
//    if (isset($_GET['id']) || $_GET['id'] !== "photos") {
//        include "includes/photo_section.php";
//    }
//}
if (!isset($_GET['id']) || $_GET['id'] !== "photos") {
    include "includes/photo_section.php";
}
?>
<?php include "includes/google_map.php";
echo isset($_GET['id']);
?>

<div class="container">
	<div class="row">
		<div class="col-12 slogan-box">
			<p class="pardon__title">Приносим свои извинения!</p><br>
			<p class="pardon__paragraf">В связи с реконструкцией сайта
				не вся информация актуальна.<br/>
				По любому вопросу можно звонить по телефону 50-03-03.<br/>
				Ответим на email:<a class="link" href="mailto:info@500303.ru"> info@500303.ru</a>
			</p> <br/>
		</div>
	</div>
</div>
<footer class="container-fluid s-footer">
	<div class="row">
		<div class="col-12 col-lg-6">
			<div class="s-footer__license">
				<span>Лицензия № ЛО-22-01-004076</span><br/>
			</div>
		</div>
		<div class="col-12 col-lg-6 ">
			<div class="s-footer__link">
				<a href="index.php?id=agreement">Cогласие на обработку персональных данных</a>
			</div>
		</div>
	</div>
</footer>
<!--</div>-->
<!--<script src="https://maps.api.2gis.ru/2.0/loader.js?pkg=full"></script>-->
<script type="text/javascript" src="script/script.js"></script>
<script async defer
		src="https://maps.googleapis.com/maps/api/js?key=123&callback=initMap">
</script>

<!-- Yandex.Metrika counter -->
<script type="text/javascript"> (function (d, w, c) {
		(w[c] = w[c] || []).push(function () {
			try {
				w.yaCounter46792473 = new Ya.Metrika({
					id: 46792473,
					clickmap: true,
					trackLinks: true,
					accurateTrackBounce: true
				});
			} catch (e) {
			}
		});
		var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () {
			n.parentNode.insertBefore(s, n);
		};
		s.type = "text/javascript";
		s.async = true;
		s.src = "https://mc.yandex.ru/metrika/watch.js";
		if (w.opera == "[object Opera]") {
			d.addEventListener("DOMContentLoaded", f, false);
		} else {
			f();
		}
	})(document, window, "yandex_metrika_callbacks"); </script>
<noscript>
	<div><img src="https://mc.yandex.ru/watch/46792473" style="position:absolute; left:-9999px;" alt=""/></div>
</noscript>
<!-- /Yandex.Metrika counter -->

<!-- <script>window.jQuery || document.write('<script src="script/jquery.js"><\/script>')</script> -->
<script>
	function initMap() {
		var element = document.getElementById('map'),
			doc = document.documentElement,
			center;

		if (doc.clientWidth < 992) {
			center = {
				lat: 53.333846,
				lng: 83.770396
			}
		} else {
			center = {
				lat: 53.3335472,
				lng: 83.7672569
			}
		}

		var options = {
			zoom: 17,
			gestureHandling: 'cooperative',
			scrollwheel: false,
			// mapTypeControlOptions: false,
			center: center,

		};
		var myMap = new google.maps.Map(element, options);

		var icon = {
			url: "images/map-icon.png",
			size: new google.maps.Size(60, 86),
			scaledSize: new google.maps.Size(60, 86),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(30, 86)

		}

		var marker = new google.maps.Marker({
			position: {
				lat: 53.333846,
				lng: 83.770396
			},
			map: myMap,
			// icon: "images/map-icon.svg"
			icon: icon
			// animation: google.maps.Animation.DROP

		});


		var infoWindow = new google.maps.InfoWindow({
			content: "<h2 style='color:#00bbff' >Медицинский центр «Жизнь»</h2>"
		});

		marker.addListener('click', function () {
			infoWindow.open(myMap, marker);
		});
	}
</script>
</body>
</html>
