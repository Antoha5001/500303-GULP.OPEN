"use strict";
(function () {

    document.addEventListener('DOMContentLoaded', function () {

        var doc = document.documentElement;

        function PhotoQuery(settings) {
            // this.wrapper = settings.wrapper;
            var self = this;
            this.wrapper = settings.wrapper;
            this.img = this.wrapper.getElementsByTagName('img')[0];
            this.img_src = this.wrapper.getElementsByTagName('img')[0].src;


            this.getName = function () {

            };
            window.addEventListener("resize",function (ev) {
                if(parseInt(window.innerWidth) <= 991){

                    console.log(doc.clientWidth);
                    console.log(window.innerWidth);
                    self.img.src = settings.smallPhoto;
                } else {

                    self.img.src = self.img_src;
                }
            });
            // if(window.matchMedia("(min-width: 1100px)").matches){
            //
            // 	console.log(this.img_src);
            // }
        }


        var photo_bottom = document.getElementsByClassName('photo-section-right_top-photo')[0];

        if(photo_bottom){

            var photo_bottom_obj = new PhotoQuery({
                wrapper : photo_bottom,
                smallPhoto : "../images/photos/photo-1.jpg"
            });

            photo_bottom_obj.getName();
        }

    });


})();
