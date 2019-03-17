function alignMiddleOnecolText() {
	if ($(window).width() > 991) {
		$('.c_post.onecol').each(function() {
			var thumb_height = $(this).find('img').height();
			var name_height = $(this).find('.infos .name').height();
			var summary_height = $(this).find('.infos .summary').height();
			$(this).find('.infos .name').attr('style', 'margin-top:' + (thumb_height - (name_height+summary_height)) / 2 + 'px');
		});
	} else {
		$('.c_post.onecol .name').attr('style', 'margin-top: 15px');
	}
}

$(window).on('load resize', function(){
	alignMiddleOnecolText();
});
$(window).on('load', function() {
	if ($('.filter-best-buy .owl-stage').eq(0).width() > $('.filter-best-buy .owl-stage-outer').eq(0).width()) {
		$('.filter-best-buy .owl-nav').addClass('show');
	}
});
$(window).on('load', function() {
	if ($('.list_document #tab-selector .owl-stage').eq(0).width() > $('.list_document #tab-selector .owl-stage-outer').eq(0).width()) {
		$('.list_document #tab-selector .owl-nav').addClass('show');
	}
});
$(document).ready(function() {
	$('.submenu-caret-wrapper').on('click', function(e){
		e.stopPropagation();
		e.preventDefault();
		$(this).closest('li').toggleClass('open');
	});
});
$(document).ready(function() {
	$('#tree .caret-wrapper').on('click', function(e){
		$(this).closest('li').find('> ul').toggle();
	});
});
function makeGalleryPhotoBoxSameHeight() {
	var highestBox = 0;
	var elementArr = ['.title', '.description'];

	$.each( elementArr, function( key, value ) {
		highestBox = 0;
		$('.item_photo ' + value).height('auto');

		$('.item_photo ' + value).each(function() {
			if ($(this).height() > highestBox) {
				highestBox = $(this).height();
			}
		});

		if ($(window).width() > 576) {	// Chỉ căn bằng nhau trên desktop
			$('.item_photo ' + value).height(highestBox);
		}
	});
}

function makeVideoBoxSameHeight() {
	var highestBox = 0;
	var elementArr = ['.name', '.description'];

	$.each( elementArr, function( key, value ) {
		highestBox = 0;
		$('.item-video ' + value).height('auto');

		$('.item-video ' + value).each(function() {
			if ($(this).height() > highestBox) {
				highestBox = $(this).height();
			}
		});

		if ($(window).width() > 576) {	// Chỉ căn bằng nhau trên desktop
			$('.item-video ' + value).height(highestBox);
		}
	});
}

$(document).ready(function($) {
	makeGalleryPhotoBoxSameHeight();
	makeVideoBoxSameHeight();

	$(window).on('load', 'resize', function(){
		makeGalleryPhotoBoxSameHeight();
		makeVideoBoxSameHeight();
	});
});
function makePostBoxSameHeight() {
	var highestBox = 0;
	var elementArr = [".name", ".summary"];

	$.each( elementArr, function( key, value ) {
		highestBox = 0;
		$('.list_post .c_post:not(.onecol) ' + value).height('auto');

		$('.list_post .c_post:not(.onecol) ' + value).each(function() {
			if ($(this).height() > highestBox) {
				highestBox = $(this).height();
			}
		});

		if ($(window).width() > 576) {	// Chỉ căn bằng nhau trên desktop
			$('.list_post .c_post:not(.onecol) ' + value).height(highestBox);
		}
	});
}

$(document).ready(function($) {
	makePostBoxSameHeight();

	$(window).on('load', 'resize', function(){
		makePostBoxSameHeight();
	});
});
function makeProductBoxSameHeight() {
	var highestBox = 0;
	var elementArr = ['.name', '.infos'];

	$.each( elementArr, function( key, value ) {
		highestBox = 0;
		$('.product-grid-item ' + value).height('auto');

		$('.product-grid-item ' + value).each(function() {
			if ($(this).height() > highestBox) {
				highestBox = $(this).height();
			}
		});

		if ($(window).width() > 576) {	// Chỉ căn bằng nhau trên desktop
			$('.product-grid-item ' + value).height(highestBox);
		}
	});
}

$(document).ready(function($) {
	makeProductBoxSameHeight();

	$(window).on('load resize', function(){
		makeProductBoxSameHeight();
	});
});
function makeVideosSameHeight() {
	// Căn độ cao video chính và các videos phụ bằng nhau trên desktop
	if ($(window).width() > 991) {
		$('.small-videos').height($('.big-video').height());
	} else {
		$('.small-videos').height('auto');
	}
}

$(document).ready(function($) {
	makeVideosSameHeight();

	$(window).on('resize', function(){
		makeVideosSameHeight();
	});
});
$(document).ready(function($) {
	$(".filter-bar .dropdown").hover(
		function(){ $(this).addClass('open') },
		function(){ $(this).removeClass('open') }
	);

	$('.home .best-buy .glyphicon').on('click', function(){
		$(this).closest('.heading').find('.filter-best-buy').toggle();
	});

	$('.home .category .glyphicon').on('click', function(){
		$(this).closest('.heading').find('.filter-category').toggle();
	});

	$('.list_product .heading .glyphicon').on('click', function(){
		$(this).closest('.heading').find('.filter-category').toggle();
	});
});
// $(document).ready(function() {
// 	var flag_localhost = false;
// 	if (window.location.href.indexOf("localhost") >= 0) flag_localhost = true;
// 	if (!flag_localhost){
// 		document.onkeydown = function(e){
// 			if ((e.ctrlKey &&
// 				(e.keyCode === 67 ||
// 				 e.keyCode === 86 ||
// 				 e.keyCode === 85 ||
// 				 e.keyCode === 83 ||
// 				 e.keyCode === 117)) ||  e.keyCode === 123) {
// 				return false;
// 			} else {
// 				return true;
// 			}
// 		};
// 		function clickIE4(){
// 			if (event.button==2){
// 				return false;
// 			}
// 		}

// 		function clickNS4(e){
// 			if (document.layers||document.getElementById&&!document.all){
// 				if (e.which==2||e.which==3){
// 					return false;
// 				}
// 			}
// 		}
// 		if (document.layers){
// 			document.captureEvents(Event.MOUSEDOWN);
// 			document.onmousedown=clickNS4;
// 		} else if (document.all&&!document.getElementById){
// 			document.onmousedown=clickIE4;
// 		}
// 		document.oncontextmenu=new Function("return false");
// 	}
// });


$(document).ready(function() {
	// Bọc các ảnh trong bài viết với thuộc tính fancybox gallery
	$(".detail_post .description img").each(function(){
		var src = $(this).attr('src');
		$(this).wrap('<a href="'+src+'" data-fancybox="group"></a>');
	});

	$(".detail_infomation .description img").each(function(){
		var src = $(this).attr('src');
		$(this).wrap('<a href="'+src+'" data-fancybox="group"></a>');
	});

	if ($(window).width() < 576) {
		$("[data-fancybox]").fancybox({
			slideShow: true,
			loop : true,
			toolbar  : true,
			smallBtn : true,
			type: "iframe",
			iframe : {
				preload : true,
				css : {
					width : '100%',
					height : 'auto',
				}
			},
			hash : false
		});
	} else {
		$("[data-fancybox]").fancybox({
			slideShow: true,
			loop : true,
			toolbar  : true,
			smallBtn : true,
			type: "iframe",
			iframe : {
				preload : true,
			},
			hash : false
		});
	}
	$.fancybox.defaults.hash = false;
});

$(document).ready(function($) {
	$('#form-filter-basic .search-btn .glyphicon-search').on('click', function(){
		$('.search-input').toggle();
		$('.search-input input').focus();
	});
});
function makeStickyMainNav() {
	if ($(window).width() > 576) {
		var s = $("#nav-wrapper");
		s.removeClass("stick");
		var pos = s.position();
		var windowpos = $(window).scrollTop();

		if (windowpos >= pos.top) {
			s.addClass("stick");
		} else {
			s.removeClass("stick");
		}
	}
}

$(document).ready(function($) {
	$(window).on('load resize scroll', function() {
		makeStickyMainNav();
	});
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsaWduTWlkZGxlT25lY29sVGV4dC5qcyIsImhhbmRsZUJlc3RTZWxsQ2F0ZWdvcnlOYXYuanMiLCJoYW5kbGVEb2N1bWVudENhdGVnb3J5TmF2LmpzIiwiaGFuZGxlTWVudUxldmVsMy5qcyIsImhhbmRsZVNpZGViYXJNZW51LmpzIiwibWFrZUdhbGxlcnlQaG90b1NhbWVIZWlnaHQuanMiLCJtYWtlUG9zdEJveFNhbWVIZWlnaHQuanMiLCJtYWtlUHJvZHVjdEJveFNhbWVIZWlnaHQuanMiLCJtYWtlVmlkZW9zU2FtZUhlaWdodC5qcyIsIm9wZW5DYXRlZ29yeUZpbHRlckhvdmVyLmpzIiwicHJldmVudENvcHkuanMiLCJzY3JpcHRzLmpzIiwic2hvd1NlYXJjaElucHV0LmpzIiwic3RpY2t5TWFpbk5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFsaWduTWlkZGxlT25lY29sVGV4dCgpIHtcblx0aWYgKCQod2luZG93KS53aWR0aCgpID4gOTkxKSB7XG5cdFx0JCgnLmNfcG9zdC5vbmVjb2wnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHRodW1iX2hlaWdodCA9ICQodGhpcykuZmluZCgnaW1nJykuaGVpZ2h0KCk7XG5cdFx0XHR2YXIgbmFtZV9oZWlnaHQgPSAkKHRoaXMpLmZpbmQoJy5pbmZvcyAubmFtZScpLmhlaWdodCgpO1xuXHRcdFx0dmFyIHN1bW1hcnlfaGVpZ2h0ID0gJCh0aGlzKS5maW5kKCcuaW5mb3MgLnN1bW1hcnknKS5oZWlnaHQoKTtcblx0XHRcdCQodGhpcykuZmluZCgnLmluZm9zIC5uYW1lJykuYXR0cignc3R5bGUnLCAnbWFyZ2luLXRvcDonICsgKHRodW1iX2hlaWdodCAtIChuYW1lX2hlaWdodCtzdW1tYXJ5X2hlaWdodCkpIC8gMiArICdweCcpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdCQoJy5jX3Bvc3Qub25lY29sIC5uYW1lJykuYXR0cignc3R5bGUnLCAnbWFyZ2luLXRvcDogMTVweCcpO1xuXHR9XG59XG5cbiQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBmdW5jdGlvbigpe1xuXHRhbGlnbk1pZGRsZU9uZWNvbFRleHQoKTtcbn0pOyIsIiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRpZiAoJCgnLmZpbHRlci1iZXN0LWJ1eSAub3dsLXN0YWdlJykuZXEoMCkud2lkdGgoKSA+ICQoJy5maWx0ZXItYmVzdC1idXkgLm93bC1zdGFnZS1vdXRlcicpLmVxKDApLndpZHRoKCkpIHtcblx0XHQkKCcuZmlsdGVyLWJlc3QtYnV5IC5vd2wtbmF2JykuYWRkQ2xhc3MoJ3Nob3cnKTtcblx0fVxufSk7IiwiJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG5cdGlmICgkKCcubGlzdF9kb2N1bWVudCAjdGFiLXNlbGVjdG9yIC5vd2wtc3RhZ2UnKS5lcSgwKS53aWR0aCgpID4gJCgnLmxpc3RfZG9jdW1lbnQgI3RhYi1zZWxlY3RvciAub3dsLXN0YWdlLW91dGVyJykuZXEoMCkud2lkdGgoKSkge1xuXHRcdCQoJy5saXN0X2RvY3VtZW50ICN0YWItc2VsZWN0b3IgLm93bC1uYXYnKS5hZGRDbGFzcygnc2hvdycpO1xuXHR9XG59KTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0JCgnLnN1Ym1lbnUtY2FyZXQtd3JhcHBlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCQodGhpcykuY2xvc2VzdCgnbGknKS50b2dnbGVDbGFzcygnb3BlbicpO1xuXHR9KTtcbn0pOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHQkKCcjdHJlZSAuY2FyZXQtd3JhcHBlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXHRcdCQodGhpcykuY2xvc2VzdCgnbGknKS5maW5kKCc+IHVsJykudG9nZ2xlKCk7XG5cdH0pO1xufSk7IiwiZnVuY3Rpb24gbWFrZUdhbGxlcnlQaG90b0JveFNhbWVIZWlnaHQoKSB7XG5cdHZhciBoaWdoZXN0Qm94ID0gMDtcblx0dmFyIGVsZW1lbnRBcnIgPSBbJy50aXRsZScsICcuZGVzY3JpcHRpb24nXTtcblxuXHQkLmVhY2goIGVsZW1lbnRBcnIsIGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdGhpZ2hlc3RCb3ggPSAwO1xuXHRcdCQoJy5pdGVtX3Bob3RvICcgKyB2YWx1ZSkuaGVpZ2h0KCdhdXRvJyk7XG5cblx0XHQkKCcuaXRlbV9waG90byAnICsgdmFsdWUpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJCh0aGlzKS5oZWlnaHQoKSA+IGhpZ2hlc3RCb3gpIHtcblx0XHRcdFx0aGlnaGVzdEJveCA9ICQodGhpcykuaGVpZ2h0KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA1NzYpIHtcdC8vIENo4buJIGPEg24gYuG6sW5nIG5oYXUgdHLDqm4gZGVza3RvcFxuXHRcdFx0JCgnLml0ZW1fcGhvdG8gJyArIHZhbHVlKS5oZWlnaHQoaGlnaGVzdEJveCk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gbWFrZVZpZGVvQm94U2FtZUhlaWdodCgpIHtcblx0dmFyIGhpZ2hlc3RCb3ggPSAwO1xuXHR2YXIgZWxlbWVudEFyciA9IFsnLm5hbWUnLCAnLmRlc2NyaXB0aW9uJ107XG5cblx0JC5lYWNoKCBlbGVtZW50QXJyLCBmdW5jdGlvbigga2V5LCB2YWx1ZSApIHtcblx0XHRoaWdoZXN0Qm94ID0gMDtcblx0XHQkKCcuaXRlbS12aWRlbyAnICsgdmFsdWUpLmhlaWdodCgnYXV0bycpO1xuXG5cdFx0JCgnLml0ZW0tdmlkZW8gJyArIHZhbHVlKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCQodGhpcykuaGVpZ2h0KCkgPiBoaWdoZXN0Qm94KSB7XG5cdFx0XHRcdGhpZ2hlc3RCb3ggPSAkKHRoaXMpLmhlaWdodCgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKCQod2luZG93KS53aWR0aCgpID4gNTc2KSB7XHQvLyBDaOG7iSBjxINuIGLhurFuZyBuaGF1IHRyw6puIGRlc2t0b3Bcblx0XHRcdCQoJy5pdGVtLXZpZGVvICcgKyB2YWx1ZSkuaGVpZ2h0KGhpZ2hlc3RCb3gpO1xuXHRcdH1cblx0fSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcblx0bWFrZUdhbGxlcnlQaG90b0JveFNhbWVIZWlnaHQoKTtcblx0bWFrZVZpZGVvQm94U2FtZUhlaWdodCgpO1xuXG5cdCQod2luZG93KS5vbignbG9hZCcsICdyZXNpemUnLCBmdW5jdGlvbigpe1xuXHRcdG1ha2VHYWxsZXJ5UGhvdG9Cb3hTYW1lSGVpZ2h0KCk7XG5cdFx0bWFrZVZpZGVvQm94U2FtZUhlaWdodCgpO1xuXHR9KTtcbn0pOyIsImZ1bmN0aW9uIG1ha2VQb3N0Qm94U2FtZUhlaWdodCgpIHtcblx0dmFyIGhpZ2hlc3RCb3ggPSAwO1xuXHR2YXIgZWxlbWVudEFyciA9IFtcIi5uYW1lXCIsIFwiLnN1bW1hcnlcIl07XG5cblx0JC5lYWNoKCBlbGVtZW50QXJyLCBmdW5jdGlvbigga2V5LCB2YWx1ZSApIHtcblx0XHRoaWdoZXN0Qm94ID0gMDtcblx0XHQkKCcubGlzdF9wb3N0IC5jX3Bvc3Q6bm90KC5vbmVjb2wpICcgKyB2YWx1ZSkuaGVpZ2h0KCdhdXRvJyk7XG5cblx0XHQkKCcubGlzdF9wb3N0IC5jX3Bvc3Q6bm90KC5vbmVjb2wpICcgKyB2YWx1ZSkuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkKHRoaXMpLmhlaWdodCgpID4gaGlnaGVzdEJveCkge1xuXHRcdFx0XHRoaWdoZXN0Qm94ID0gJCh0aGlzKS5oZWlnaHQoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDU3Nikge1x0Ly8gQ2jhu4kgY8SDbiBi4bqxbmcgbmhhdSB0csOqbiBkZXNrdG9wXG5cdFx0XHQkKCcubGlzdF9wb3N0IC5jX3Bvc3Q6bm90KC5vbmVjb2wpICcgKyB2YWx1ZSkuaGVpZ2h0KGhpZ2hlc3RCb3gpO1xuXHRcdH1cblx0fSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcblx0bWFrZVBvc3RCb3hTYW1lSGVpZ2h0KCk7XG5cblx0JCh3aW5kb3cpLm9uKCdsb2FkJywgJ3Jlc2l6ZScsIGZ1bmN0aW9uKCl7XG5cdFx0bWFrZVBvc3RCb3hTYW1lSGVpZ2h0KCk7XG5cdH0pO1xufSk7IiwiZnVuY3Rpb24gbWFrZVByb2R1Y3RCb3hTYW1lSGVpZ2h0KCkge1xuXHR2YXIgaGlnaGVzdEJveCA9IDA7XG5cdHZhciBlbGVtZW50QXJyID0gWycubmFtZScsICcuaW5mb3MnXTtcblxuXHQkLmVhY2goIGVsZW1lbnRBcnIsIGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdGhpZ2hlc3RCb3ggPSAwO1xuXHRcdCQoJy5wcm9kdWN0LWdyaWQtaXRlbSAnICsgdmFsdWUpLmhlaWdodCgnYXV0bycpO1xuXG5cdFx0JCgnLnByb2R1Y3QtZ3JpZC1pdGVtICcgKyB2YWx1ZSkuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkKHRoaXMpLmhlaWdodCgpID4gaGlnaGVzdEJveCkge1xuXHRcdFx0XHRoaWdoZXN0Qm94ID0gJCh0aGlzKS5oZWlnaHQoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDU3Nikge1x0Ly8gQ2jhu4kgY8SDbiBi4bqxbmcgbmhhdSB0csOqbiBkZXNrdG9wXG5cdFx0XHQkKCcucHJvZHVjdC1ncmlkLWl0ZW0gJyArIHZhbHVlKS5oZWlnaHQoaGlnaGVzdEJveCk7XG5cdFx0fVxuXHR9KTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuXHRtYWtlUHJvZHVjdEJveFNhbWVIZWlnaHQoKTtcblxuXHQkKHdpbmRvdykub24oJ2xvYWQgcmVzaXplJywgZnVuY3Rpb24oKXtcblx0XHRtYWtlUHJvZHVjdEJveFNhbWVIZWlnaHQoKTtcblx0fSk7XG59KTsiLCJmdW5jdGlvbiBtYWtlVmlkZW9zU2FtZUhlaWdodCgpIHtcblx0Ly8gQ8SDbiDEkeG7mSBjYW8gdmlkZW8gY2jDrW5oIHbDoCBjw6FjIHZpZGVvcyBwaOG7pSBi4bqxbmcgbmhhdSB0csOqbiBkZXNrdG9wXG5cdGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDk5MSkge1xuXHRcdCQoJy5zbWFsbC12aWRlb3MnKS5oZWlnaHQoJCgnLmJpZy12aWRlbycpLmhlaWdodCgpKTtcblx0fSBlbHNlIHtcblx0XHQkKCcuc21hbGwtdmlkZW9zJykuaGVpZ2h0KCdhdXRvJyk7XG5cdH1cbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuXHRtYWtlVmlkZW9zU2FtZUhlaWdodCgpO1xuXG5cdCQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKXtcblx0XHRtYWtlVmlkZW9zU2FtZUhlaWdodCgpO1xuXHR9KTtcbn0pOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcblx0JChcIi5maWx0ZXItYmFyIC5kcm9wZG93blwiKS5ob3Zlcihcblx0XHRmdW5jdGlvbigpeyAkKHRoaXMpLmFkZENsYXNzKCdvcGVuJykgfSxcblx0XHRmdW5jdGlvbigpeyAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvcGVuJykgfVxuXHQpO1xuXG5cdCQoJy5ob21lIC5iZXN0LWJ1eSAuZ2x5cGhpY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5oZWFkaW5nJykuZmluZCgnLmZpbHRlci1iZXN0LWJ1eScpLnRvZ2dsZSgpO1xuXHR9KTtcblxuXHQkKCcuaG9tZSAuY2F0ZWdvcnkgLmdseXBoaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0JCh0aGlzKS5jbG9zZXN0KCcuaGVhZGluZycpLmZpbmQoJy5maWx0ZXItY2F0ZWdvcnknKS50b2dnbGUoKTtcblx0fSk7XG5cblx0JCgnLmxpc3RfcHJvZHVjdCAuaGVhZGluZyAuZ2x5cGhpY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5oZWFkaW5nJykuZmluZCgnLmZpbHRlci1jYXRlZ29yeScpLnRvZ2dsZSgpO1xuXHR9KTtcbn0pOyIsIi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuLy8gXHR2YXIgZmxhZ19sb2NhbGhvc3QgPSBmYWxzZTtcbi8vIFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoXCJsb2NhbGhvc3RcIikgPj0gMCkgZmxhZ19sb2NhbGhvc3QgPSB0cnVlO1xuLy8gXHRpZiAoIWZsYWdfbG9jYWxob3N0KXtcbi8vIFx0XHRkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbihlKXtcbi8vIFx0XHRcdGlmICgoZS5jdHJsS2V5ICYmXG4vLyBcdFx0XHRcdChlLmtleUNvZGUgPT09IDY3IHx8XG4vLyBcdFx0XHRcdCBlLmtleUNvZGUgPT09IDg2IHx8XG4vLyBcdFx0XHRcdCBlLmtleUNvZGUgPT09IDg1IHx8XG4vLyBcdFx0XHRcdCBlLmtleUNvZGUgPT09IDgzIHx8XG4vLyBcdFx0XHRcdCBlLmtleUNvZGUgPT09IDExNykpIHx8ICBlLmtleUNvZGUgPT09IDEyMykge1xuLy8gXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG4vLyBcdFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcbi8vIFx0XHRcdH1cbi8vIFx0XHR9O1xuLy8gXHRcdGZ1bmN0aW9uIGNsaWNrSUU0KCl7XG4vLyBcdFx0XHRpZiAoZXZlbnQuYnV0dG9uPT0yKXtcbi8vIFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH1cblxuLy8gXHRcdGZ1bmN0aW9uIGNsaWNrTlM0KGUpe1xuLy8gXHRcdFx0aWYgKGRvY3VtZW50LmxheWVyc3x8ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQmJiFkb2N1bWVudC5hbGwpe1xuLy8gXHRcdFx0XHRpZiAoZS53aGljaD09Mnx8ZS53aGljaD09Myl7XG4vLyBcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHR9XG4vLyBcdFx0fVxuLy8gXHRcdGlmIChkb2N1bWVudC5sYXllcnMpe1xuLy8gXHRcdFx0ZG9jdW1lbnQuY2FwdHVyZUV2ZW50cyhFdmVudC5NT1VTRURPV04pO1xuLy8gXHRcdFx0ZG9jdW1lbnQub25tb3VzZWRvd249Y2xpY2tOUzQ7XG4vLyBcdFx0fSBlbHNlIGlmIChkb2N1bWVudC5hbGwmJiFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCl7XG4vLyBcdFx0XHRkb2N1bWVudC5vbm1vdXNlZG93bj1jbGlja0lFNDtcbi8vIFx0XHR9XG4vLyBcdFx0ZG9jdW1lbnQub25jb250ZXh0bWVudT1uZXcgRnVuY3Rpb24oXCJyZXR1cm4gZmFsc2VcIik7XG4vLyBcdH1cbi8vIH0pO1xuXG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0Ly8gQuG7jWMgY8OhYyDhuqNuaCB0cm9uZyBiw6BpIHZp4bq/dCB24bubaSB0aHXhu5ljIHTDrW5oIGZhbmN5Ym94IGdhbGxlcnlcblx0JChcIi5kZXRhaWxfcG9zdCAuZGVzY3JpcHRpb24gaW1nXCIpLmVhY2goZnVuY3Rpb24oKXtcblx0XHR2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcblx0XHQkKHRoaXMpLndyYXAoJzxhIGhyZWY9XCInK3NyYysnXCIgZGF0YS1mYW5jeWJveD1cImdyb3VwXCI+PC9hPicpO1xuXHR9KTtcblxuXHQkKFwiLmRldGFpbF9pbmZvbWF0aW9uIC5kZXNjcmlwdGlvbiBpbWdcIikuZWFjaChmdW5jdGlvbigpe1xuXHRcdHZhciBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuXHRcdCQodGhpcykud3JhcCgnPGEgaHJlZj1cIicrc3JjKydcIiBkYXRhLWZhbmN5Ym94PVwiZ3JvdXBcIj48L2E+Jyk7XG5cdH0pO1xuXG5cdGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDU3Nikge1xuXHRcdCQoXCJbZGF0YS1mYW5jeWJveF1cIikuZmFuY3lib3goe1xuXHRcdFx0c2xpZGVTaG93OiB0cnVlLFxuXHRcdFx0bG9vcCA6IHRydWUsXG5cdFx0XHR0b29sYmFyICA6IHRydWUsXG5cdFx0XHRzbWFsbEJ0biA6IHRydWUsXG5cdFx0XHR0eXBlOiBcImlmcmFtZVwiLFxuXHRcdFx0aWZyYW1lIDoge1xuXHRcdFx0XHRwcmVsb2FkIDogdHJ1ZSxcblx0XHRcdFx0Y3NzIDoge1xuXHRcdFx0XHRcdHdpZHRoIDogJzEwMCUnLFxuXHRcdFx0XHRcdGhlaWdodCA6ICdhdXRvJyxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGhhc2ggOiBmYWxzZVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdCQoXCJbZGF0YS1mYW5jeWJveF1cIikuZmFuY3lib3goe1xuXHRcdFx0c2xpZGVTaG93OiB0cnVlLFxuXHRcdFx0bG9vcCA6IHRydWUsXG5cdFx0XHR0b29sYmFyICA6IHRydWUsXG5cdFx0XHRzbWFsbEJ0biA6IHRydWUsXG5cdFx0XHR0eXBlOiBcImlmcmFtZVwiLFxuXHRcdFx0aWZyYW1lIDoge1xuXHRcdFx0XHRwcmVsb2FkIDogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHRoYXNoIDogZmFsc2Vcblx0XHR9KTtcblx0fVxuXHQkLmZhbmN5Ym94LmRlZmF1bHRzLmhhc2ggPSBmYWxzZTtcbn0pO1xuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuXHQkKCcjZm9ybS1maWx0ZXItYmFzaWMgLnNlYXJjaC1idG4gLmdseXBoaWNvbi1zZWFyY2gnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdCQoJy5zZWFyY2gtaW5wdXQnKS50b2dnbGUoKTtcblx0XHQkKCcuc2VhcmNoLWlucHV0IGlucHV0JykuZm9jdXMoKTtcblx0fSk7XG59KTsiLCJmdW5jdGlvbiBtYWtlU3RpY2t5TWFpbk5hdigpIHtcblx0aWYgKCQod2luZG93KS53aWR0aCgpID4gNTc2KSB7XG5cdFx0dmFyIHMgPSAkKFwiI25hdi13cmFwcGVyXCIpO1xuXHRcdHMucmVtb3ZlQ2xhc3MoXCJzdGlja1wiKTtcblx0XHR2YXIgcG9zID0gcy5wb3NpdGlvbigpO1xuXHRcdHZhciB3aW5kb3dwb3MgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblx0XHRpZiAod2luZG93cG9zID49IHBvcy50b3ApIHtcblx0XHRcdHMuYWRkQ2xhc3MoXCJzdGlja1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cy5yZW1vdmVDbGFzcyhcInN0aWNrXCIpO1xuXHRcdH1cblx0fVxufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XG5cdCQod2luZG93KS5vbignbG9hZCByZXNpemUgc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG5cdFx0bWFrZVN0aWNreU1haW5OYXYoKTtcblx0fSk7XG59KTsiXX0=
