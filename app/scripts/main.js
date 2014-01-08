var creativecode = function () {
	'use strict';

	console.log('hi bbz');

	/*
	*	Loops through page sections and binds to
	*	their coming in and out of window focus
	*
	*	@method scrollSpy
	*/
	function scrollSpy () {

		console.log('Initialising scroll spy');

		// Find every page section
		var $pages = $('.page'),
			pageCount = $pages.length,
			i = 0,
			page,
			pages = [],
			windowHeight = $(window).height();

		// Loop through them
		for ( i; i < pageCount; i += 1 ) {

			var thisPage = $pages[i],
				position = $(thisPage).position();

			// $pages[i].length;
			page = {
				el: thisPage,
				$el: $(thisPage),
				upper: position.top,
				lower: position.top + $(thisPage).height()
			};

			pages.push(page);
		}

		// Bind to window scroll
		function bindScroll () {

			var scrollTop = $(window).scrollTop(),
				page;

			for ( i = 0; i < pageCount; i += 1 ) {

				page = pages[i];

				if ( scrollTop + (windowHeight/2) >= page.upper && scrollTop + (windowHeight/2) <= page.lower ) {

					console.log( 'active', page.el );
					
					page.$el.addClass('is-active been-active');
				} else {

					page.$el.removeClass('is-active');
				}
			}
		}

		$(window).on('scroll', bindScroll);

		// Apply classes / fire events
	}

	return {

		scrollSpy: scrollSpy
	};
};

// To avoid self-calling above
var code = creativecode();


$(function () {
	'use strict';

	code.scrollSpy();
});