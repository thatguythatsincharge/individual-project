$(document).ready(function() {
	
	var lastScrollTop = 0;

	$(document).scroll(function() {
		var top = $(document).scrollTop();

		if(top > lastScrollTop) {
			if(top > 20) {
				$('#nav').css('opacity', 0);
			}
		} else {
			$('#nav').css('opacity', 1);
		}

		lastScrollTop = top;
	});
});