$(window).on('load', function () {
	$('.preloader').delay(500).fadeOut('slow', function () {
		$(this).attr('style', 'display: none !important');
	});
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 300) {
		$('.scrollToTop').fadeIn();
	} else {
		$('.scrollToTop').fadeOut();
	}
});

$('.scrollToTop').click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 800);
	return false;
});


baguetteBox.run('.gallery');




$('#videoPlayBtn').on('click', function() {
    $("#video")[0].src += "?autoplay=1";
	$('#videoPlayBtn').attr('style', 'display: none');
});



