/*
* 1. ПРИ НАБОРЕ onchange, проверяем что не постое, и что значение верное
*
* 2. ПРИ ОТПРАВКЕ onsubmit, проверяем что не постое, и что значение верное
*
* 3. Если верно, отправляем через AJAX на сервер
*
*
* */
(function () {

	//Конструктор формы
	function Validator(settings) {
		this.form = document.getElementById(settings.id);
		this.elements = this.form.elements;
		this.submit = this.form.getElementsByClassName(settings.submit)[0];
		this.mailer = settings.phpScript;

		//Отправляет почту
		this.mailPost = function(){
			var recuest = new XMLHttpRequest();

		};

		//Проверяет value текущего элемента на пустую строку
		function isEmpty(input) {

			if(input.type === "checkbox") {
				if(!input.checked){
					input.parentNode.classList.add('error');
					return false;
				}else {
					input.parentNode.classList.remove('error');
					return true;
				}
			}

			if (input.value === "" || input.value === undefined){
				input.parentNode.classList.add('error');
				return false;
			} else {
				input.parentNode.classList.remove('error');
				return true;
			}
		}

		//Перебор элементов формы
		for(var i = 0; i < this.elements.length; i++){

			if(this.elements[i].type === "submit") continue;
			if(this.elements[i].type === "file") {
				var parent = this.elements[i].parentNode,
					label = parent.getElementsByTagName('label')[0];


				this.elements[i].addEventListener('change', function () {

					var span = this.parentNode.getElementsByTagName('span')[0];
					span.innerHTML= this.files[0].name;

					console.log(this.files);

				});
			}
			if(this.elements[i].type === 'text'){
				this.elements[i].addEventListener('change', function () {

					isEmpty(this);

				});
			}

		}

		//Действие при нажатии на кнопку
		this.onSubmit = function() {
			var self = this;
			this.submit.addEventListener('click', function (e) {
				e.preventDefault();
				e.stopPropagation();
				var request = new XMLHttpRequest(),
					value;

				for(var i = 0; i < self.elements.length; i++){

					if(self.elements[i].type === "submit") continue;
					if(self.elements[i].type === "checkbox") {
						if(isEmpty(self.elements[i])){
							continue;
						}else {
							isEmpty(self.elements[i]);
							return false;
						}
					}
					if(self.elements[i].type === 'text' || self.elements[i].type === 'tel' ){
						if(isEmpty(self.elements[i])){
							continue;
						} else {
							isEmpty(self.elements[i]);
							return false;
						}
					}


				}

				//Собирает значения с полей
				value = new FormData(self.form);

				//Отправляем
				request.open('POST',self.mailer);
				request.onreadystatechange = function () {

					//Если сообщение ушло, очистить поля
					if (request.readyState === 4 && request.status === 200){
						for(var i = 0; i < self.elements.length; i++){

							if(self.elements[i].type === 'text' || self.elements[i].type === 'tel' ){
								self.elements[i].value = "";
							}

						}

						alert("Ваше сообщение отправлено!");

					}
				};
				// console.log(self.form.elements);

				request.send(value);

			});
		};
		this.onSubmit();
	}


	document.addEventListener('DOMContentLoaded', function () {

		//Validation
		var inputModalPhone = document.getElementById('form_phone');
		var maskPhone = new Inputmask("+7(999)999-99-99");
		maskPhone.mask(inputModalPhone);


		//
		var form = new Validator({

			//Id forms
			id: "top_form",
			//Id button
			submit: "form-box__submit",
			phpScript: "script/mailer.php"
		});

	});



})();