/*
 * Overall View Model for this app
 */
function yelpDataViewModel() {
	// Assign 'this' to 'self' to avoid confusion in JS reference
	var self = this;

	// Have Knockout.js observe for changes in the search term
	self.searchTerm = ko.observable("food");

	// Trigger a new Yelp query 
	self.updateSearchResults = function() {
		ko.computed(function() {
			getYelpData(self.searchTerm());
		}, self);
	};
}

// Activate Knockout.js on page
ko.applyBindings(new yelpDataViewModel());