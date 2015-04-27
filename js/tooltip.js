(function($) {	
	$(function() {
		if($.browser.msie && $.browser.version > 6 && $.browser.version < 9) {
			$.getScript('js/PIE.js', function() {
				$('.tooltip').each(function() {
					PIE.attach(this);
				});	
			});
		};
	
		if(!Modernizr.csstransitions) {
			$('.tooltip-box').fadeTo(10, 0)
		
			$('a.tooltip').hover(function() {
				$(this).stop().animate({'border-color': '#fff'}, 400)
				.find('.tooltip-box').stop().animate ({'opacity': 1, 'bottom': '90px'}, 400);
			}, function() {
				$(this).stop().animate({'border-color': '#4b4b4b'}, 400)
				.find('.tooltip-box').stop().animate({'opacity': 0, 'bottom': '100px'}, 400);
			});
		};
	});	
})(jQuery);
