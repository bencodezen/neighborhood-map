/*
 * Overall View Model for this app
 */
function yelpDataModel() {
	// Assign 'this' to 'self' to avoid confusion in JS reference
	var self = this;

	// Array to contain all yelpBusinesses
	self.businesses = [];

	// Operations
	self.addBusiness = function(name, lat, lng) {
		self.businesses.push(new yelpBusiness(name, lat, lng));
	}
}

/* 
 * Yelp Business Object
 */
function yelpBusiness(name, lat, lng) {
	// Assign 'this' to 'self' to avoid confusion in JS reference
	var self = this;
	self.name = name;
	self.lat = lat;
	self.lng = lng;
}

// Activate Knockout.js on page
ko.applyBindings(new yelpViewModel());