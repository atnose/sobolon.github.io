jQuery('.drawer_icon').on('click', function(e){
  e.preventDefault();

  jQuery('.drawer_icon').toggleClass('is_active');
  jQuery('.drawer_content').toggleClass('is_active');
  jQuery('.drawer_background').toggleClass('is_active');

  return false;
})

jQuery( function(){
  jQuery( '.drawer_background,a[href^="#"]').click( function(){

     jQuery('.drawer_background').removeClass('is_active');
     jQuery('.drawer_icon').removeClass('is_active');
     jQuery('.drawer_content').removeClass('is_active');

     return false;
  } );
} );

const swiper = new Swiper(".swiper",{
  spaceBetween: 40,
  width: 250,
  loop: false,
  loopedSlides: 6,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 168,
      width: 274,
      loop: true,
    }
  }
});

//アコーディオンをクリックした時の動作
$('.qa_box-q').on('click', function() {//タイトル要素をクリックしたら
  var findElm = $(this).next(".qa_box-a");
  var openBox = $(this).children(".qa_box-icon");

  $('.qa_box-a').slideUp(500);//クラス名.box-aがついたすべてのアコーディオンを閉じる
  $(openBox).toggleClass('is_open');//−ボタンへの切り替え

  if($('.qa_box-icon').hasClass('is_open')){
    $('.qa_box-icon').not(openBox).removeClass('is_open');
  }//クリック要素以外のマイナスボタンを切り替え

  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去

  }else{//それ以外は
    $('.close').removeClass('close'); //クラス名closeを全て除去した後
    $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
    $(findElm).slideDown(500);//アコーディオンを開く
  }
});

$(function(){
  var scroll = $('#t-scroll');
  scroll.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 80) {
          scroll.fadeIn();
     } else {
          scroll.fadeOut();
     }
  });
  scroll.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

//googleform
let $form = $( '#js-form' )
$form.submit(function (e) {
  $.ajax({
   url: $form.attr('action'),
   data: $form.serialize(),
   type: "POST",
   dataType: "xml",
   statusCode: {
      0: function() {
        //送信に成功したときの処理
        $('#js-submit').slideUp(1)
        $( '#js-success' ).slideDown(1)
      },
    }
  });
  return false;
});

var $submitButton = $('#js-submit');
var $nameFields = $('#your-name, #your-kana');
var $agreeCheckbox = $('#agree-checkbox');

$nameFields.on('change', function() {
  if ($nameFields.filter(function() { return this.value }).length === 2 && $agreeCheckbox.is(':checked') ) {
    // ボタンを有効化し、クラスを追加
    $submitButton.prop('disabled', false).addClass('-active');
  } else {
    // ボタンを無効化し、クラスを削除
    $submitButton.prop('disabled', true).removeClass('-active');
  }
});

$agreeCheckbox.on('change', function() {
  if ($nameFields.filter(function() { return this.value }).length === 2 && $agreeCheckbox.is(':checked') ) {
    // ボタンを有効化し、クラスを追加
    $submitButton.prop('disabled', false).addClass('-active');
  } else {
    // ボタンを無効化し、クラスを削除
    $submitButton.prop('disabled', true).removeClass('-active');
  }
});

////////////////////////////

jQuery('a[href^="#"]').on('click', function() {

  var id = jQuery(this).attr('href');
  var position = 0;
  if ( id != '#') {
     var position = jQuery(id).offset().top;
  }
  var position = jQuery(id).offset().top;
  jQuery('html,body').animate({
     scrollTop: position
  },
  400);
});

