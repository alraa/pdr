var global, windowWidth;

$(document).ready(function(){
	
	/* retina images */
	if (window.devicePixelRatio > 1) {
    var lowresImages = $('img.content_img');

    lowresImages.each(function(i) {
      var lowres = $(this).attr('src');
      var highres = lowres.replace(".", "@2x.");
      $(this).attr('src', highres);
    });
  }
	//--
	
	
	/* top menu hover */
	$('.top_menu > li').hover(function(){
		if(windowWidth >= 1000){
			$(this).find('a.sub').addClass('expanded');
			$('.submenu').css('z-index', '0');
			$(this).find('.submenu').fadeIn(0).css('z-index', '1000');
		}
	}, function(){});
	$('.top_menu').hover(function(){}, function(){
		if(windowWidth >= 1000){
			$(this).find('a.sub').removeClass('expanded');
			$(this).find('.submenu').fadeOut(0);
		}
	});
	$('.top_menu > li > a:not(.sub)').hover(function(){
		if(windowWidth >= 1000){
			$(this).parent().parent().find('a.sub').removeClass('expanded');
			$(this).parent().parent().find('.submenu').fadeOut(0);
		}
	}, function(){});
	//--
	
	
	/* mobile menu */
	$('.menu_toggle').click(function(){
		$('body').toggleClass('expanded');
		$('html').toggleClass('no_scroll');
	});
	//--
	
	
	/* mobile submenu */
	$('.top_menu > li a.sub').click(function(){
		if(windowWidth < 1000){
			$(this).next('.submenu').slideToggle(500);
			$(this).toggleClass('expanded');
			return false;
		}
	});
	//--
	
	
	/* mobile bottom menu */
	$('.foot_nav').click(function(){
		$(this).toggleClass('expanded')
	});
	//--
	
	
	/* faq */
	$('.faq_list li, .careers_list li').click(function(){
		$(this).find('div').slideToggle(500);
		$(this).find('b').toggleClass('minus');
	});
	//--
	
	
	/* terms - more info */
	$('.read_more').click(function(){
		$(this).fadeOut(0);
		$(this).next('.more_info').slideDown(500);
		return false;
	});
	//--
	
	
	/* custom select */
	$('body').addClass('hasJS');
	$('select.custom').each(function() {
		
		var sb = new SelectBox({
			selectbox: $(this),
			customScrollbar: true,
			height: 127,
			scrollOptions: {
				autoReinitialise: true,
				showArrows: true
			}
			
		});
		
	});
	//--
	
	
	/* Placeholder for IE */
	if($('#form_comment')[0] || $('#form-order__modal')[0]){
		$('input, textarea').placeholder();
	}
	//--
	
	
	$('a[data-rel]').each(function() {
		$(this).attr('rel', $(this).data('rel'));
	});
	
	
	
	global = {
			window: $(window)
	};
	
	global.window.resize(onResize);
	onResize();	
	
	$('.blog_list li').addClass('grid-item');
	if($('.grid').length){
    	$('.grid').masonry({
		  // options
		  itemSelector: '.grid-item',
		  gutter: 5,
		  percentPosition: true
		});
	};


});

function onResize(){
	
	windowWidth = global.window.width();
	
}