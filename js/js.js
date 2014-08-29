$(document).ready(function(){

	$('.contentPadd h3').first().addClass('first_h3');
	$('.contentPadd.loginPage h3').addClass('first_h3');
	$('.contentInfoText, .contentInfoBlock').last().addClass('marg-bottom');
	$('.loginPage .contentInfoText').addClass('marg-top');
	
	
		

	$('.desc p').first().css('padding-top','0px');
	
	$('li.prods_vseparator').append($('<div class="prods_vseparator_img"></div>'));
	
	$('ul').each(function (ul) {
	$(this).find('li').first().addClass('first');
	$(this).find('li').last().addClass('last');
	});	
	$('#bodyContent').each(function (bodyContent) {
	$(this).find('.contentContainer').first().addClass('first');
	$(this).find('.contentContainer').last().addClass('last');
	});	
	$('.prods_content').each(function (div) {
	$(this).find('ul.row').first().addClass('first');
	$(this).find('ul.row').last().addClass('last');	
	});
	$('.row_4').each(function (row_4) {
	$(this).find('.infoBoxWrapper.box4').first().addClass('first');
	$(this).find('.infoBoxWrapper.box4').last().addClass('last');	
	});
	
	$('.breadcrumb').each(function (breadcrumb) {
	$(this).find('a').last().addClass('last');	
	});
	$('.row_4').each(function (title_t) {
	$(this).find('.title-t').first().addClass('first');
	});
	$('.bookmarks, #columnLeft, #columnRight').each(function (multi) {
	$(this).find('div.infoBoxWrapper').first().addClass('first');
	$(this).find('div.infoBoxWrapper').last().addClass('last');	
	});
	$('.box4 .infoBoxContents, .box5 .infoBoxContents').each(function (multi2) {
	$(this).find('ul').first().addClass('first');
	$(this).find('ul').last().addClass('last');	
	});
	$('.contentPadd').each(function () {
	$(this).find('.contentInfoBlock').first().addClass('first');
	$(this).find('.contentInfoBlock').last().addClass('last');
	});
	$('.prods_content').each(function (prods_content) {
	$(this).find('> ul').first().addClass('first');
	$(this).find('> ul').last().addClass('last');
	});	
	/* *** */
	$('.boxes_footer').each(function (boxes_footer) {
	$(this).find('.Footer_BoxWrapper').first().addClass('first');
	$(this).find('.Footer_BoxWrapper').last().addClass('last');
	});	

	
});
$(function(){
	 var keeper=$('.prods_info_page .wrapper_pic_div'),
	  	 zoomPic=$('.wrapper_pic_zoom').css({opacity:0})
	 keeper
	  .bind('mouseenter',function(){
	   zoomPic.stop()
		 .animate({opacity:1})
	
	  })
	  .bind('mouseleave',function(){
	  zoomPic
	   .stop()
	   .animate({opacity:0})
	  }); 
});


$(document).ready(function(){
	// hide #back-top first
	$("#back-top").css('visibility', 'visible');	
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
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
});
$(document).ready(function(){
	$('#piGal').css('visibility','visible');
	$('ul#stringball').css('visibility','visible');
});

$(document).ready(function(){
//	$('ul#stringball').css('visibility', 'visible');
	
	$('li.row_view').click(function() {
		$('.contentPadd.r_view').fadeIn().css('display', 'block');
		$('.contentPadd.t_view').css('display', 'none');
		$('.row_table .table_view.last').removeClass('act')
		$('.row_table .row_view.first').addClass('act')		
	});
});
$(document).ready(function(){
	$('li.table_view').click(function() {
		$('.contentPadd.t_view').fadeIn().css('display', 'block')
		$('.contentPadd.r_view').css('display', 'none')
		$('.row_table .row_view.first').removeClass('act')
		$('.row_table .table_view.last').addClass('act')		
	});
});


$(document).ready(function(){
	$(".menu li").click( function() { 
		$(this).addClass("mouseclick") 
	});
	
		// drop down languages in header
	$(function(){
		 var keeper=$('#box_languages'),
				 langLi=$('#box_languages li').css({opacity:0,	display: 'none'})
				 langPic=$('#box_languages li img').css({})
		 keeper
			.bind('mouseover',function(){
				langLi.parent().stop()
				.css('display', 'block');
			 	langLi.stop()
			 .css('display', 'block')
			 .animate({
				opacity: 1
			}, 1200);
			})
			.bind('mouseleave',function(){
				langLi.parent().stop()
				.css('display', 'none');
				langLi
			 .stop()
			 .animate({opacity:0})
			 .css('display', 'none') 
			}); 
	});
		// drop down currencies in header	
	$(function(){
		 var keeper=$('#box_currencies'),
				 langLi=$('#box_currencies li').css({opacity:0,	display: 'none'})
		 keeper
			.bind('mouseover',function(){
				langLi.parent().stop()
				.css('display', 'block');
			 	langLi.stop()
			 .css('display', 'block')
			 .animate({
				opacity: 1
			}, 1200);
			})
			.bind('mouseleave',function(){
				langLi.parent().stop()
				.css('display', 'none');
				langLi
			 .stop()
			 .animate({opacity:0})
			 .css('display', 'none') 
			}); 
	});
	
});
