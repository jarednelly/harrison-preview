if ( !window.USC ) { window.USC = {}; }
window.USC.showHide = function ( e ) {

	var defaultOptions = {
		// The class added is customizable.
		className: 'show',
		// Do you need a class added to the html element? It goes on the container by default.
		htmlClass: false,
		// Should the panel slide open and shut?
		slider: false
	}

	// Define the elements
	var el = e.target;
	var type = e.type;
	var box = el.closest( '[data-showhide]' );
	var panel = box.querySelector( '[data-role="panel"]' );
	var btns = Array.from( box.querySelectorAll('[data-role="btn"]') );
	var lastFocus = Array.from( panel.querySelectorAll('a, button, input, select, [tabindex="0"], video') ).pop();
	var returnSpot = btns[0];
	var videos = panel.querySelectorAll('video');

	if ( !lastFocus ) lastFocus = panel;

	// Set the options
	var data = box.dataset;
	el.options = Object.assign( {}, defaultOptions, data );

	// Create the toggling functionality
	function toggleActive(el, e) {

		// Check our active state and toggle some functionality
		var active = ( !panel.getAttribute('aria-hidden') || panel.getAttribute('aria-hidden') === "true" ) ? false : true ;

		// If the slider option is turned on, trigger the slider functionality
		if (el.options.slider === true)  USC.slideToggle( panel, !active )

		// Toggle our classes and attributes
		box.classList.toggle( el.options.className );
		if (el.options.htmlClass) document.documentElement.classList.toggle( el.options.className );
		panel.setAttribute('aria-hidden', active);

		// Set the state of videos and set our focus depending on if we're closing or opening a panel
		if ( active ) {
			// Loop through and pause our videos if we close a panel
			videos.forEach ( function(vid) {
				try { vid.pause(); }
				catch ( ex ) { ; }
			});

			returnSpot.focus();
		} else {
			// Play our first video if we have one when we open a panel
			try {
				if ( videos[0].readyState >= 1 ) videos[0].play();
			}
			catch ( ex ) { ; }

			panel.focus(); 
		}

	} 

	// Before we run everything, validate to make sure our targets and types are correct
	var run;
	
	// if we click or pressed enter on a button
	if (e.keyCode === 13 && el.closest('[data-role="btn"]') || type == 'click' && el.closest( '[data-role="btn"]' )) run = true;
	
	// if we pressed escape on a showhide element
	if ( e.keyCode == 27 && el.closest( '[data-showhide]' ) )  run = true;

	// if we pressed tab
	if (e.keyCode === 9) {

		// If shift was held to move back and we're on the panel, toggle the panel
		if (e.shiftKey && panel == el) {
			run = true;
			e.preventDefault();
			returnSpot.focus();
		} 
		// If moving forward and we're currently on our last element, toggle the panel
		else if ( !e.shiftKey && lastFocus == el ) {
			run = true;
			lastFocus = panel;
		}

	} 
	
	// Fire when ready
	if (run === true) toggleActive(el, e);

};