
	var ASSET_DIR = 'https://w.cokhach.com' ;
	function addWidget(){
		
		addCSS('//w.cokhach.com/assets/css/slickModal.min.css');
		addCSS('//w.cokhach.com/assets/css/style.css');
		setTimeout(function(){addJs('//w.cokhach.com/assets/js/slickModal.min.js');},500);
		setTimeout(function(){addJs('//w.cokhach.com/assets/v1/plugin/js/jquery.slickmodal.min.js');},1000);
		/*
		if (window.jQuery){
			addJs('//w.cokhach.com/assets/js/slickModal.min.js');
		}{
			setTimeout(function(){addJs('//w.cokhach.com/assets/js/slickModal.min.js');},500);
		}
		*/

		addCSS('//w.cokhach.com/assets/v1/plugin/css/slickmodal.min.css');
		<!-- addCSS('//w.cokhach.com/assets/v1/css/style.css'); -->
		if (window.jQuery){
			addJs('//w.cokhach.com/assets/v1/plugin/js/jquery.slickmodal.min.js');
		}{
			setTimeout(function(){addJs('//w.cokhach.com/assets/v1/plugin/js/jquery.slickmodal.min.js');},1000);
		}
		
	}
	addWidget();
	
	// Include CSS file
	function addCSS(filename){ 
		var head = document.getElementsByTagName('head')[0];
		var style = document.createElement('link');
		style.href = filename;
		style.type = 'text/css';
		style.rel = 'stylesheet';
		head.append(style);
	}

	function addJs(filename){
		var a = document.createElement("script");
		a.src = filename;
		a.type = "text/javascript";		
		var head = document.getElementsByTagName('head')[0];
		head.appendChild(a);
	}
	

			<!-- addCSS("//w.cokhach.com/assets/widgets/nutgoidienthoai/style.css"); -->
			<!-- addCSS("//w.cokhach.com/assets/widgets/nutgoidienthoai/style-call.css"); -->
			addCSS("//w.cokhach.com/assets/widgets/nutgoidienthoai/style-new.css");
					function waitingJqueryLoadedNutGoiDienThoai(){
				if (window.jQuery && typeof window.jQuery.fn.slickModals !== 'undefined') { 
					JsCoKhachNutGoiDienThoai();
				}else{
					setTimeout(waitingJqueryLoadedNutGoiDienThoai,500);
				}
			}
			waitingJqueryLoadedNutGoiDienThoai();
					function JsCoKhachNutGoiDienThoai(){
				jQuery(document).ready(function($){ 
					$("body").append('<div id="btn-phonecall" class="openSlickModal openModalNutGoiDienThoai phonecall-btn-2 medium bottom-right  btn-collapsed" data-icon-animation="circle" ><a href="javascript:void(0)"><i id="btn-phonecall-icon" class="cokhachphone cokhachphone-06"></i><div class="main-div"><div class="first-div"><span id="ck-textCallNoidung1">Bấm để gọi hỗ trợ - 0123456789</span></div><div class="second-div"><span id="ck-textCallNoidung2">Bấm để gọi hỗ trợ - 0123456789</span></div></div></a></div><div class="cokhach-PopupConntroller" style="display:none"><div id="popupNutGoiDienThoai" class="slickModal">   <div class="slickWindow">  <div id="body-cokhach" class="wrap popup-cokhach-open"> <div class="title cokhach-title" style="color:#D66161">Trợ giúp qua điện thoại</div> <p class="cokhach-description">Nhập số di động của bạn, chúng tôi sẽ gọi lại cho bạn ngay.</p> <form class="slickForm"><input type="text" class="field" id="cokhachNGDT" name="cokhachNGDT cokhachTelephone" placeholder="Số điện thoại" autofocus autocomplete="off" /><div id="errorMsg"></div><input id="btn-NutGoiDienThoai" type="button" class="send cokhach-submit" style="background-color:#D66161" value="Gửi Yêu Cầu" /> </form>  </div>  <div class="wrap popup-cokhach-finish message-cokhach"> <div class="title cokhach-success1" style="color:#D66161">Yêu cầu của bạn đã được gửi đi</div> <p class="cokhach-success2">Nhân viên hỗ trợ sẽ lại gọi cho bạn trong ít phút</p>  </div>  <div class="cta rightbox" style="background-image: url(//w.cokhach.com/assets/images/background/popup-bg-23.jpg)">  </div>   </div></div></div>');
				
					function popupCoKhachNutGoiDienThoai(){
						$(".cokhach-PopupConntroller").show();
						$('#popupNutGoiDienThoai').slickModals({
							overlayVisible: true,
							overlayClosesModal: true,
							overlayColor: 'rgba(0,0,0,0.8)',
							overlayAnimationDuration: '0.3',
							popupWidth: '560px',
							popupHeight: '320px',
							popupLocation: 'center',
							popupAnimationDuration: '0.8',
							popupAnimationEffect: 'slideTop',
							popupBackground: "rgba(255,255,255,1)",
							popupRadius: '0',
							popupMargin: '0',
							popupPadding: '0',
							addCloseButton: true, 
							buttonStyle: 'tag',
							enableESC: true, 
							reopenClass: 'openModalNutGoiDienThoai',
						});
					}
					
					popupCoKhachNutGoiDienThoai();
					$(".cokhach-submit").click(function(){
						$(".popup-cokhach-open").hide();
						$(".popup-cokhach-finish").fadeIn();
						setTimeout(function () {$('.closeModal').click();}, 4000); 
					});
					 $(".slickForm").submit(function(e){
						e.preventDefault();
					});
				});
			}
			window.addEventListener('message', function(event) { 
				if (event){
					if (event.data =="hidePopupContent"){
						$("#popupNutGoiDienThoai").removeClass('isActive');
					}else if (event.data =="showPopupContent"){
						$("#popupNutGoiDienThoai").addClass('isActive');
						$(".popup-cokhach-open").show();
						$(".popup-cokhach-finish").hide();
					}else if (event.data =="showPopupEnd"){
						$("#popupNutGoiDienThoai").addClass('isActive');
						$(".popup-cokhach-open").hide();
						$(".popup-cokhach-finish").show();
					}
				}
			}); 
					function waitingJqueryLoadedHoiSauVaiGiay(){
				if (window.jQuery && typeof window.jQuery.fn.slickModals !== 'undefined') { 
					JsCoKhachHoiSauVaiGiay();
				}else{
					setTimeout(waitingJqueryLoadedHoiSauVaiGiay,500);
				}
			}
			waitingJqueryLoadedHoiSauVaiGiay();
					function JsCoKhachHoiSauVaiGiay(){
				jQuery(document).ready(function($){
					$("body").append('<div class="cokhach-PopupConntroller" style="display:none"><div id="popupHoiSauVaiGiay" class="slickModal">   <div class="slickWindow">  <div id="body-cokhach" class="wrap popup-cokhach-open"> <div class="title cokhach-title" style="color:#D66161">Trợ giúp qua điện thoại</div> <p class="cokhach-description">Nhập số di động của bạn, chúng tôi sẽ gọi lại cho bạn ngay.</p> <form class="slickForm"><input type="text" class="field"  id="cokhachHSVG" name="cokhachHSVG cokhachTelephone" placeholder="Số điện thoại" autofocus autocomplete="off" /><div id="errorMsg"></div><input id="btn-HoiSauVaiGiay" type="button" class="send cokhach-submit" style="background-color:#D66161" value="Gửi Yêu Cầu" /> </form>  </div>  <div class="wrap popup-cokhach-finish message-cokhach"> <div class="title cokhach-success1" style="color:#D66161">Yêu cầu của bạn đã được gửi đi</div> <p class="cokhach-success2">Nhân viên hỗ trợ sẽ lại gọi cho bạn trong ít phút</p>  </div>  <div class="cta rightbox" style="background-image: url(//w.cokhach.com/assets/images/background/popup-bg-13.jpg)">  </div>   </div></div></div>');
					function popupCoKhachHoiSauVaiGiay(){
						$(".cokhach-PopupConntroller").show();
						$('#popupHoiSauVaiGiay').slickModals({
							popupType: 'delayed',
							delayTime: '10000',
							overlayVisible: true,
							overlayClosesModal: true,
							overlayColor: 'rgba(0,0,0,0.8)',
							overlayAnimationDuration: '0.3',
							popupWidth: '560px',
							popupHeight: '320px',
							popupLocation: 'center',
							popupAnimationDuration: '0.8',
							popupAnimationEffect: 'slideTop',
							popupBackground: "rgba(255,255,255,1)",
							popupRadius: '0',
							popupMargin: '0',
							popupPadding: '0',
							addCloseButton: true, 
							buttonStyle: 'tag',
							enableESC: true, 
						});
					}
					
					popupCoKhachHoiSauVaiGiay();
					$(".cokhach-submit").click(function(){
						$(".popup-cokhach-open").hide();
						$(".popup-cokhach-finish").fadeIn();
						setTimeout(function () {$('.closeModal').click();}, 4000); 
					});
					 $(".slickForm").submit(function(e){
						e.preventDefault();
					});
				});
			}
			window.addEventListener('message', function(event) { 
				if (event){
					if (event.data =="hidePopupContent"){
						$("#popupHoiSauVaiGiay").removeClass('isActive');
					}else if (event.data =="showPopupContent"){
						$("#popupHoiSauVaiGiay").addClass('isActive');
						$(".popup-cokhach-open").show();
						$(".popup-cokhach-finish").hide();
					}else if (event.data =="showPopupEnd"){
						$("#popupHoiSauVaiGiay").addClass('isActive');
						$(".popup-cokhach-open").hide();
						$(".popup-cokhach-finish").show();
					}
				}
			}); 
		