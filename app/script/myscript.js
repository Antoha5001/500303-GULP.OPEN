var $lite_green = "#ccffe4",
$lite_green2 = "#7DFFBA",
$blue = "#38baf2",
$lite_blue = "#b0d9ff",
$dark_blue = "#096790",
$dark_green = "#397556",
$dark_green2 = "#1E3D2D";
$(document).ready(function(){

      setTimeout(function(){
            $('.logo-box__logo').addClass('is-visible');
      },500);
      if(!Modernizr.svg){
            $('.logo-box__logo img').attr({
            'src':'images/logo.png'
            });            
      }

});
/*$(function(){

    var
	$input = $(".form-box__input"),
    $button = $(".form-box__button");

    $input.focusin(function(){
        $(this).css("background","white");
    });
    $input.focusout(function(){
		$(this).css("background",$lite_blue);
    });
    $button.mouseenter(function(){
        $(this).css("background",$lite_blue);
    });
});*/
