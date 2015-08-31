var map;

// Function to create Google Map
function initializeMap() {

  /*
   * Set starting location:
   * Chinatown, San Francisco
   */
  var startLocation = new google.maps.LatLng(37.794612, -122.407861);

  /*
   * Set mapOptions for Google Maps
   * Documentation can be found here
   * http://bit.ly/1ItNfAl
   */
  var mapOptions = {
    zoom: 16,
    zoomControl: true,
    center: startLocation,
    disableDefaultUI: true
  };

  /* 
   * Instantiate Google Map with the 
   * above configurations 
   */ 
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
};

// Function to call Yelp API for data
function getYelpData() {

  /* 
   * Keys are being left in for prototyping purposes, but production
   * level code would abstract this code out
   */
  var authParams = {
    consumerKey : 'VQMqc69WoO0Lm05nPszZBQ',
    consumerSecret : 'CG0B-0CycMpoGSXQh2wQgaTq5wA',
    signaturedMethod : 'hmac-sha1',
    token : 'jsHKoLeXXYXSic1KCUIu7g-vG2rm2AKv',
    tokenSecret : 'CTp7AmbVye8sch3DrpG3mwLYMlg'
  };
  
};

// Create map on page 
initializeMap();

