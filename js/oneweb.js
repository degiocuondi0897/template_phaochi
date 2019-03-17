//Thiết lập thời gian ẩn thông báo
function hideMessage(){
	$("#message_top").fadeOut('medium');
	$("#flashMessage").fadeOut('medium');
}
$(window).resize(function() {
	resize();
});
function resize(){
	w_content = $(".full_width").width();
	w_window = windowSize();
	if(w_window[0]>1200){
		$('.auto_dropdown').mouseover(function(){
			$(this).addClass('open');
		});
		$('.auto_dropdown').mouseout(function(){
			$(this).removeClass('open');
		});
	}
	if(w_window[0]<410){
		$('.des img').attr('class','img-responsive');
	}

	//popup
	$(window).scroll(function () {
		$(".window").css('top',$(this).scrollTop()+100);
	});
}
//Lên đầu trang
function backToTop(){
	// hide #back-top first
	$("#back-top").hide();

	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
				$('#call').fadeIn();
				//fix top menu
				//$('#nav_menu').addClass('navbar-fixed-top');
			} else {
				$('#call').fadeOut();
				$('#back-top').fadeOut();
				//$('#nav_menu').removeClass('navbar-fixed-top');
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
}

//Lấy kích thước màn hình
function windowSize(){
	var width = 0, height = 0;
	if( typeof( window.innerWidth ) == 'number' ) {
	  //Non-IE
	  width = window.innerWidth;
	  height = window.innerHeight;
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
	  //IE 6+ in 'standards compliant mode'
	  width = document.documentElement.clientWidth;
	  height = document.documentElement.clientHeight;
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
	  //IE 4 compatible
	  width = document.body.clientWidth;
	  height = document.body.clientHeight;
	}
	return [width,height];
}
//Xem thêm nội dung
function more_description(id){
	$(".more_"+id).fadeIn(400);
	$(".less_"+id).hide();
}

function less_description(id){
	$(".less_"+id).fadeIn(400);
	$(".more_"+id).hide();
}


function number_format (number, decimals, dec_point, thousands_sep) {
	  // http://kevin.vanzonneveld.net
	  // + original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
	  // + improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // + bugfix by: Michael White (http://getsprink.com)
	  // + bugfix by: Benjamin Lupton
	  // + bugfix by: Allan Jensen (http://www.winternet.no)
	  // + revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
	  // + bugfix by: Howard Yeend
	  // + revised by: Luke Smith (http://lucassmith.name)
	  // + bugfix by: Diogo Resende
	  // + bugfix by: Rival
	  // + input by: Kheang Hok Chin (http://www.distantia.ca/)
	  // + improved by: davook
	  // + improved by: Brett Zamir (http://brett-zamir.me)
	  // + input by: Jay Klehr
	  // + improved by: Brett Zamir (http://brett-zamir.me)
	  // + input by: Amir Habibi (http://www.residence-mixte.com/)
	  // + bugfix by: Brett Zamir (http://brett-zamir.me)
	  // + improved by: Theriault
	  // + input by: Amirouche
	  // + improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // * example 1: number_format(1234.56);
	  // * returns 1: '1,235'
	  // * example 2: number_format(1234.56, 2, ',', ' ');
	  // * returns 2: '1 234,56'
	  // * example 3: number_format(1234.5678, 2, '.', '');
	  // * returns 3: '1234.57'
	  // * example 4: number_format(67, 2, ',', '.');
	  // * returns 4: '67,00'
	  // * example 5: number_format(1000);
	  // * returns 5: '1,000'
	  // * example 6: number_format(67.311, 2);
	  // * returns 6: '67.31'
	  // * example 7: number_format(1000.55, 1);
	  // * returns 7: '1,000.6'
	  // * example 8: number_format(67000, 5, ',', '.');
	  // * returns 8: '67.000,00000'
	  // * example 9: number_format(0.9, 0);
	  // * returns 9: '1'
	  // * example 10: number_format('1.20', 2);
	  // * returns 10: '1.20'
	  // * example 11: number_format('1.20', 4);
	  // * returns 11: '1.2000'
	  // * example 12: number_format('1.2000', 3);
	  // * returns 12: '1.200'
	  // * example 13: number_format('1 000,50', 2, '.', ' ');
	  // * returns 13: '100 050.00'
	  // Strip all characters but numerical ones.
	  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
	  var n = !isFinite(+number) ? 0 : +number,
	    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
	    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
	    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
	    s = '',
	    toFixedFix = function (n, prec) {
	      var k = Math.pow(10, prec);
	      return '' + Math.round(n * k) / k;
	    };
	  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
	  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	  if (s[0].length > 3) {
	    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	  }
	  if ((s[1] || '').length < prec) {
	    s[1] = s[1] || '';
	    s[1] += new Array(prec - s[1].length + 1).join('0');
	  }
	  return s.join(dec);
}

$(document).ready(function(){
	backToTop();
	resize();

	$("#clk_search").click(function(){
		$('#h_search').show();
	});
	//Hiệu ứng hover chuột vào ảnh
	$(".thumb img").mouseover(function(){
		$(this).animate({opacity: 0.7},200);
	});
	$(".thumb img").mouseout(function(){
		$(this).animate({opacity: 1},200);
	});
	//Ẩn thông báo
	var t=setTimeout('hideMessage()',5000);
	//Thêm .img-responsive cho tag img
	$(".adv_block img").attr('class','img-responsive');
	//Thêm ALT cho tag img
	$(".adv_block img").attr('alt','');

	$("iframe").wrap('<div class="embed-responsive embed-responsive-16by9"/>');
	$("iframe").addClass('embed-responsive-item m-b-15');
});

