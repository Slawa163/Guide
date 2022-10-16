<?php
$MNT_ID = '37808884';
$MNT_TRANSACTION_ID = '2108311963';
$MNT_OPERATION_ID = '2187277091';
$MNT_AMOUNT = '1.00';
$MNT_CURRENCY_CODE = 'RUB';
$MNT_SUBSCRIBER_ID = 'testgus@yandex.ru';
$MNT_TEST_MODE = '0';
$code = '12345';
echo md5( $MNT_ID . $MNT_TRANSACTION_ID . $MNT_OPERATION_ID . $MNT_AMOUNT . $MNT_CURRENCY_CODE .
$MNT_SUBSCRIBER_ID . $MNT_TEST_MODE . $code );
?>

https://www.moneta.ru/paymentSuccess.htm?MNT_TRANSACTION_ID=1632816846968&MNT_OPERATION_ID=531421548&MNT_ID=37808884


//	$: content = noscale ? 'width=device-width, initial-scale=1, maximum-scale=1.0' : 'width=device-width, initial-scale=1' 
//	$: console.log(content);
// Отключение увеличения размеров формы на iOS при вводе в поле c font-size < 16px!

// Первый способ viewport content maximum-scale=1
// например вешаем на события mouseover	mousedown
//$("input[type=text], textarea").mouseover(zoomDisable).mousedown(zoomEnable);
//function zoomDisable(){
//  $('head meta[name=viewport]').remove();
//  $('head').prepend('<meta name="viewport" content="user-scalable=0" />');
//}
//function zoomEnable(){
//  $('head meta[name=viewport]').remove();
//  $('head').prepend('<meta name="viewport" content="user-scalable=1" />');

// или на события focus blur
//var $viewportMeta = $('meta[name="viewport"]');
//$('input, select, textarea').bind('focus blur', function(event) {
//$viewportMeta.attr('content', 'width=device-width,initial-scale=1,maximum-scale=' +        (event.type == 'blur' ? 10 : 1));
//});

// Второй способ на событии touchmove при scale > 1 event.preventDefault() event.stopPropagation();

//}//$('body').bind('touchmove', function(event) { event.preventDefault() }); // turns off
//$('body').unbind('touchmove'); // turns on
//    $(this).on('touchmove', function (event) {
//    if (event.originalEvent.scale > 1) {
//        event.preventDefault();
//        event.stopPropagation();
//    }
//    });

// Третий способ  устанавливаем стиль поля font-size в 16px ( или 1rem ) для предотвращения увеличения,
// а затем убираем используя события mousedown и focus (увеличение происходит между ними )
//input.addEventListener("mousedown", function (e) {
//  e.target.style.fontSize = "16px";
//});
// change font-size back to its initial value so the design will not break
//input.addEventListener("focus", function (e) {
//  e.target.style.fontSize = "";
//});
/* И 4 способа на css */

/* * {
 -webkit-text-size-adjust: none;
  text-size-adjust: none;
} */
/* input[type="text"]:focus,
input[type="email"]:focus {
  -webkit-text-size-adjust: 100%;
} */

/* input {
	touch-action: manipulation;
} */

/* body {
  touch-action: pan-x pan-y;
} */
