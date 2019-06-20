<?php

	header('Content-type: multipart/form-data; charset=utf-8');
	header('Cache-Control: no-store, no-cache');
	header('Expires: ' . date('r'));


// генерируем разделитель
	$boundary = "--".md5(uniqid(time()));

	if($_SERVER["REQUEST_METHOD"]=="POST"){

		//Имя сервера
		$host = "Host: www.".$_SERVER["HTTP_HOST"]."<br>";

        $to  = 'photo@623030.ru' . ', '; // обратите внимание на запятую
        $to .= '3852@623030.ru';

		$zagolovok = "Заявка на звонок";

		$mailheaders = "MIME-Version: 1.0;\r\n";
		$mailheaders .="Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
// разделитель указывается в заголовке в параметре boundary


//	$headers = 'Content-type: multipart/form-data; charset=utf-8'. "\r\n";

		$name = "";
		$phone = "";
		$email = "";
		$comment = "";


		if(!empty($_POST['name']))
			$name = "Имя: ".trim(strip_tags($_POST["name"]))."<br>";

		if(!empty($_POST['phone']))
			$phone = "Телефон: ".trim(strip_tags($_POST["phone"]))."<br>";

		if(!empty($_POST['email'])){
			$email = "E-mail: ".trim(strip_tags($_POST["email"]))."<br>";
		}
		if(!empty($_POST['comment'])){
			$comment = "Коментарий: ".trim(strip_tags($_POST["comment"]))."<br>";
		}

		$message = "$host $name $phone $email $comment";
		
		//Разделитель для текстовых полей
		$multipart = "--$boundary\r\n";
		$multipart .= "Content-Type: text/html; charset=utf-8\r\n";
		$multipart .= "\r\n";
		$multipart .= $message."\r\n";

		//Обработка файла
		if($_FILES['file'] && $_FILES['file']["name"] !== ""){

			$strFilesName = $_FILES["file"]["name"];
			$strContent = chunk_split(base64_encode(file_get_contents($_FILES["file"]["tmp_name"])));
//
			$file_part = "\r\n--$boundary\r\n";
			$file_part .= "Content-Type: application/octet-stream; name=".$strFilesName."\r\n";
			$file_part .= "Content-Transfer-Encoding: base64\r\n";
			$file_part .= "Content-Disposition: attachment; filename=".$strFilesName."\r\n";
			$file_part .= "\r\n";
//		$file_part .= chunk_split(base64_encode($strContent));
			$file_part .= $strContent;
			$file_part .= "\r\n--$boundary--\r\n";

			$multipart .= $file_part;
		}


		mail("$to","$zagolovok","$multipart ","$mailheaders");

	}
?>