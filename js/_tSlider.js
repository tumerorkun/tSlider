(function($) {
	$.fn.slider = function( options ){
    var ilk = this;var photos =  {}; var $i = 1; var $sa;
    $.getJSON('img/photoList.json', function(data) {
      $.each(data.photos, function(key, val) {
        photos[val.number] = {name: val.name ,ext: val.ext ,location: val.location } ;
      });
      ilk.children().append('<div id="slide' + $i + '" class="slide active"><img src="' + photos[$i].location + '/' + photos[$i].name + '.' + photos[$i].ext + '"></div>');
        $sa = Object.keys(photos).length;
        ilk.lines();
    });
    this.siradaki = function (a){
      if( a == 'art' ){
        if( $i >= $sa){$i = 1;}
        else{$i++;}
      }
      else if( a == 'azal'){
        if( $i <= 1){$i = $sa;}
        else{$i--;}
      }
    }
    this.yukle = function (hangi){
      $('.slide').before('<div id="slide' + hangi + '" class="slide"><img src="' + photos[hangi].location + '/' + photos[hangi].name + '.' + photos[hangi].ext + '"></div>').ready(function(){
          $('.slides .active').animate({
                  opacity: '0'
                }, 1000, function () {
                    $('.slide:gt(0)').remove();
                    $('.slide').addClass('active');
                });});
    }
        var ayarlar = $.extend({
            // Defaults.
            speed: 1000,
            wait: 4000,
            lines: true,
            autoplay: true,
            NavBtnsID: 'NavBtn'
        }, options );
        this.NavBtns = function(){
          ilk.append('<div id="NavBtn"><div id="prevBtn" data-call="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div><div id="nextBtn" data-call="next"><i class="fa fa-angle-right" aria-hidden="true"></i></div></div>');
        }
        ilk.NavBtns();
        this.lines = function(){
          ilk.append('<div id="tSliderLines" class="lines"></div>');
          for (var $say = 1; $say <= $sa ; $say++){
            if($say === 1){ var $class = 'active';}else{$class = '';}
            $('#tSliderLines').append('<div class="tSliderline '+$class+'" data-call="lineBtn" data-slide="slide'+$say+'"></div>');
          }
          $('.tSliderline').on('click',function(){
            $(this).parent().children().removeClass('active');
            $(this).addClass('active');
            ilk.lineBtn($(this).data('slide'));
          })
        }
        this.prev = function(){
          ilk.siradaki('azal');
          ilk.yukle($i);
          $('#tSliderLines').children().removeClass('active');
          $a = $i - 1;
          $('#tSliderLines').find('div:eq('+$a+')').addClass('active');
        }
        this.next = function(){
          ilk.siradaki('art');
          ilk.yukle($i);
          $('#tSliderLines').children().removeClass('active');
          $a = $i - 1;
          $('#tSliderLines').find('div:eq('+$a+')').addClass('active');
        }
        this.lineBtn = function(which){
          which = parseInt(which.split('slide')[1]);
          $i = which;
          ilk.yukle($i);
        }

    $('#' + ayarlar.NavBtnsID).children().on('click' , function() {
      $.isFunction(ilk[$(this).data('call')]) && ilk[$(this).data('call')]();
    });
	}
$('[data-slider="tSlider"]').each(function() { 
    $(this).slider({
            speed: $(this).data('speed'),
            wait: $(this).data('wait'),
            preview: $(this).data('preview'),
            dots: $(this).data('dots')
    }); 
  });
})(jQuery);