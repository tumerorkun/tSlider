(function($) {
	$.fn.slider = function( options ){
    this.zaman;
    var ilk = this;var photos =  {}; var $i = 1; var $sa;
    var ayarlar = $.extend({
      // Defaults.
      speed: 1000,
      wait: 2000,
      lines: true,
      autoplay: true,
      NavBtnsID: 'tSliderBtns'
    }, options );
    $.getJSON('img/photoList.json', function(data) {
      $.each(data.photos, function(key, val) {
        photos[val.number] = {name: val.name ,ext: val.ext ,location: val.location } ;
      });
      ilk.append('<div class="slides"><div id="slide' + $i + '" class="slide activeS"><img src="' + photos[$i].location + '/' + photos[$i].name + '.' + photos[$i].ext + '"></div></div>');
        $sa = Object.keys(photos).length;
        if(ayarlar.lines == true){ilk.lines();}
    });
    this.siradaki = function (a){
      if( a == 'art' ){if( $i >= $sa){$i = 1;}else{$i++;}}
      else if( a == 'azal'){if( $i <= 1){$i = $sa;}else{$i--;}}
    }
    this.yukle = function (hangi){
      $('.slide').before('<div id="slide' + hangi + '" class="slide"><img src="' + photos[hangi].location + '/' + photos[hangi].name + '.' + photos[hangi].ext + '"></div>');
      $("#slide"+hangi).children('img').one("load", function() {
          $('.activeS').animate({
                  opacity: '0'
                }, ayarlar.speed, function () {
                  $('.slide:gt(0)').remove();
                  $('.slide').addClass('activeS');
                  $a = $i - 1;
                  $('#tSliderLines').find('div:eq('+$a+')').addClass('activeL').siblings().removeClass('activeL');
                });
            }).each(function(){if(this.complete){$(this).load();}});
    }
    this.NavBtns = function(){
      ilk.append('<div id="tSliderBtns"><div id="prevBtn" class="Navbtn" data-call="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div><div id="nextBtn" class="Navbtn" data-call="next"><i class="fa fa-angle-right" aria-hidden="true"></i></div></div>');
    }
    
    this.lines = function(){
      ilk.append('<div id="tSliderLines" class="lines"></div>');
      for (var $say = 1; $say <= $sa ; $say++){
        if($say === 1){ var $class = 'activeL';}else{$class = '';}
        $('#tSliderLines').append('<div class="tSliderline '+$class+'" data-call="lineBtn" data-slide="slide'+$say+'"></div>');
      }
      $('.tSliderline').on('click',function(){
        $(this).addClass('activeL').siblings().removeClass('activeL');
        ilk.lineBtn($(this).data('slide'));
      })
    }
    this.prev = function(){
      ilk.siradaki('azal');
      ilk.yukle($i);
    }
    this.next = function(){
      ilk.siradaki('art');
      ilk.yukle($i);
    }
    this.lineBtn = function(which){
      which = parseInt(which.split('slide')[1]);
      $i = which;
      ilk.yukle($i);
    }
    this.autoplay = function() {
        zaman = setInterval(function() {
          ilk.next();
      },  ayarlar.wait);
    }
    this.hover(function(){ clearInterval(zaman); }, function(){ ilk.autoplay(); });
    ilk.autoplay();ilk.NavBtns();
    $('#tSliderBtns').children().on('click' , function() {
      $.isFunction(ilk[$(this).data('call')]) && ilk[$(this).data('call')]();
    });
	}
$('[data-slider="tSlider"]').each(function() { 
    $(this).slider({
            speed: $(this).data('speed'),
            wait: $(this).data('wait') + $(this).data('speed'),
            lines: $(this).data('lines')
    }); 
  });
})(jQuery);