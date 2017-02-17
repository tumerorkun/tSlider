(function($) {


	$.fn.slider = function( options ){
    var ilk = this;var photos =  {}; var $i = 1;
    function siradaki(a){
      if( a == 'art' ){
        if( $i >= Object.keys(photos).length){
          $i = 1;
        }
        else{
          $i++;
        }
      }
      else if( a == 'azal'){
        if( $i < 1){
          $i = Object.keys(photos).length;
        }
        else{
          $i--;
        }
      }
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
          alert('prevBtn');
        }
        this.nextBtn = function(){
          //$('#NavBtn').children().off('click');
          siradaki('art');
          $('.slides').append('<div id="slide' + $i + '" class="slide"><img src="' + photos[$i].location + '/' + photos[$i].name + '.' + photos[$i].ext + '"></div>');
          $('.active').fadeOut(ayarlar.speed,function(){this.remove();$('#slide'+$i).addClass('active');});
        }


    $('#' + ayarlar.NavBtnsID).children().on('click' , function() {
      $.isFunction(ilk[$(this).data('call')]) && ilk[$(this).data('call')]();
    });
	}
$('#Slider_Plugin').slider();
})(jQuery);