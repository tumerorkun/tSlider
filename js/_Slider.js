(function($) {


	$.fn.slider = function( options ){
    var ilk = this;var photos =  {}; var $i = 1;
    function siradaki(a){
      if( a == 'art' ){
        if( $i >= Object.keys(photos).length){$i = 1;}
        else{$i++;}
      }
      else if( a == 'azal'){
        if( $i < 1){$i = Object.keys(photos).length;}
        else{$i--;}
      }
    }
    function yukle(){
      $('.slide').before('<div id="slide' + $i + '" class="slide active"><img src="' + photos[$i].location + '/' + photos[$i].name + '.' + photos[$i].ext + '"></div>').ready(function(){
          $('.slides .slide:last').animate({
                  opacity: '0'
                }, 1000, function () {
                    $('.slide:gt(0)').remove();
                });});
    }
    $.getJSON('photoList.json', function(data) {
        $.each(data.photos, function(key, val) {
          photos[val.number] = {name: val.name ,ext: val.ext ,location: val.location } ;
        });
        $('.slides').append('<div id="slide' + $i + '" class="slide active"><img src="' + photos[$i].location + '/' + photos[$i].name + '.' + photos[$i].ext + '"></div>');
    });

        var ayarlar = $.extend({
            // Defaults.
            speed: 1000,
            wait: 4000,
            lines: true,
            autoplay: true,
            NavBtnsID: 'NavBtn'
        }, options );

        this.prevBtn = function(){
          siradaki('azal');
          yukle();
        }
        this.nextBtn = function(){
          siradaki('art');
          yukle();
        }

    $('#' + ayarlar.NavBtnsID).children().on('click' , function() {
      $.isFunction(ilk[$(this).data('call')]) && ilk[$(this).data('call')]();
    });
	}
$('#Slider_Plugin').slider();
})(jQuery);