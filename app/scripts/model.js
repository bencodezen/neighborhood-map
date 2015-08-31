/*
 * Overall View Model for this app
 */
function yelpDataViewModel() {
	// Assign 'this' to 'self' to avoid confusion in JS reference
	var self = this;

}

// Activate Knockout.js on page
ko.applyBindings(new yelpViewModel());