//Photos
// var photoWrapper = document.getElementById('photos-wrapper'),
// 	modal = document.getElementById('modal-wrapper'),
// 	photoModalBox = modal.firstElementChild,
// 	imgBig = document.createElement('img');

/*-----------------------------------------*/

//Конструктор галереи
function Photogallary(settings) {
    this.modal = document.getElementById(settings.modal);
    this.wrapper = document.getElementById(settings.wrapper);
    this.photoBox = this.modal.firstElementChild;
    this.imgBig = document.createElement('img');
    this.img = this.wrapper.getElementsByTagName('img');

    this.closeButton = document.getElementsByClassName('close_button')[0];

    //Получить координаты окна
    this.coord = function () {
        var coord = {};

        coord.body = document.body;
        coord.docEl = document.documentElement;
        coord.scrollTop = window.pageYOffset || docEl.scrollTop || coord.body.scrollTop;

        coord.clientHeight = coord.docEl.clientHeight || coord.body.clientHeight;
        coord.clientWidth = coord.docEl.clientWidth || coord.bodybody.clientWidth;

        return coord;
    };


    //Показать модальное окно
    this.modalShow = function () {
        var coord = this.coord();
        this.modal.classList.add('is-block');
        this.modal.classList.add('is-visible');
        this.modal.style.height = coord.docEl.scrollHeight + 'px';
    };
    this.modalHide = function () {
        this.imgBig.style.opacity = "0";
        this.modal.classList.remove('is-block');
        this.modal.classList.remove('is-visible');
        document.body.style.overflow = 'auto';
        // photoModalBox.innerHTML = "";
        photoModalBox.removeChild(this.imgBig);
    };

    //Показать фото
    this.showPhoto = function () {
        var self = this;

        if (this.wrapper !== undefined) {
            for (var i = 0; i < this.img.length; i++) {

                this.img[i].addEventListener('click', function (e) {

                    e.stopPropagation();

                    var coord = self.coord();

                    self.imgBig.src = this.src.slice(0, -10) + '.jpg';
                    photoModalBox.appendChild(self.imgBig);

                    //Убрать скрол у окна
                    document.body.style.overflow = 'hidden';
                    self.modalShow();

                    self.imgBig.addEventListener('load',function () {
                        self.addStyle();
                        // console.log(123);
                    });



                    window.addEventListener('resize', function (ev) {
                        // console.log(imgBig.style.top);
                        self.addStyle();
                    });
                    // console.log(img.getBoundingClientRect());
                });
            }
        }
        self.closeButton.addEventListener('click',function (e) {
            e.preventDefault();
            self.modalHide();
        });
        //
        window.addEventListener('click', function (ev) {
            if (ev.target === modal) {

                self.modalHide();

            }
        });

    };

    //Добавляет стили к большому фото
    this.addStyle = function () {

        this.closeButton.id = 'close_button';

        var self = this;
        var coord = this.coord();
        this.imgBig.style.maxWidth = coord.clientWidth - 40 + "px";
        this.imgBig.style.maxHeight = coord.clientHeight - 40 + "px";
        this.imgBig.style.top = (coord.clientHeight - this.imgBig.height) / 2 + coord.scrollTop + "px";
        this.imgBig.style.left = (coord.clientWidth - this.imgBig.width) / 2 + "px";
        this.imgBig.style.opacity = "1";
        this.imgBig.parentElement.appendChild(this.closeButton);
        // console.log(this.imgBig.getBoundingClientRect());
        var imgBigCoord = this.imgBig.getBoundingClientRect();
        // console.log(imgBigCoord);
        this.closeButton.classList.add('close_button_show');
        this.closeButton.style.top =this.imgBig.offsetTop+10+"px";
        this.closeButton.style.left = (imgBigCoord.x+imgBigCoord.width - (this.closeButton.getBoundingClientRect()).width-10)+"px";
        // console.log((this.closeButton.getBoundingClientRect()).width);

    };

    this.showPhotoCoord = function () {
        // console.log(this.imgBig.getBoundingClientRect());
    }
}


/*-----------------------------------------*/


// if(document.getElementById('photos-wrapper')){
// 	var a = new Photogallary({
// 		wrapper : "photos-wrapper",
// 		modal : "modal-wrapper"
// 	});
// 	a.showPhoto();
// }