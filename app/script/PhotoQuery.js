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

                    // console.log(doc.clientWidth);
                    // console.log(window.innerWidth);
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


        var right_top_photo = document.getElementsByClassName('photo-section-right_top-photo')[0];
        var left_bottom_photo = document.getElementsByClassName('photo-section_bottom-photo')[0];
        var left_top_photo = document.getElementsByClassName('photo-section_square-photo')[0];

        if(right_top_photo){

            var photo_bottom_obj = new PhotoQuery({
                wrapper : right_top_photo,
                smallPhoto : "../images/photos/right-col_photo_tablets.jpg"
            });

            photo_bottom_obj.getName();
        }

        if(left_bottom_photo){

            var photo_bottom_obj = new PhotoQuery({
                wrapper : left_bottom_photo,
                smallPhoto : "../images/photos/hall_tablets.jpg"
            });

            photo_bottom_obj.getName();
        }
        if(left_top_photo){

            var photo_bottom_obj = new PhotoQuery({
                wrapper : left_top_photo,
                smallPhoto : "../images/photos/photo-1_tablets.jpg"
            });

            photo_bottom_obj.getName();
        }

    });


})();
