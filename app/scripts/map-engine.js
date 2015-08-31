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
function getYelpData(searchTerm) {
  /* 
   * Keys are being left in for prototyping purposes, but production
   * level code would abstract this code out
   */
  var auth = {
    consumerKey : 'VQMqc69WoO0Lm05nPszZBQ',
    consumerSecret : 'CG0B-0CycMpoGSXQh2wQgaTq5wA',
    accessToken : 'jsHKoLeXXYXSic1KCUIu7g-vG2rm2AKv',
    accessTokenSecret : 'CTp7AmbVye8sch3DrpG3mwLYMlg',
    serviceProvider : {
      signatureMethod : 'HMAC-SHA1'
    }
  };

  // Create accessor for OAuth
  var accessor = {
    consumerSecret : auth.consumerSecret,
    tokenSecret : auth.accessTokenSecret
  };

  // Temporary static terms during build out phase
  var searchTerm = searchTerm;
  var location = 'San+Francisco';

  // Define parameters for Ajax request
  var parameters = [];
  parameters.push(['term', searchTerm]);
  parameters.push(['location', location]);
  parameters.push(['callback', 'cb']);
  parameters.push(['oauth_consumer_key', auth.consumerKey]);
  parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
  parameters.push(['oauth_token', auth.accessToken]);
  parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

  // Define Ajax message here
  var message = {
    'action' : 'http://api.yelp.com/v2/search',
    'method' : 'GET',
    'parameters' : parameters
  };

  /*
   * Use OAuth methods to gain authorization privileges
   * for Yelp API
   */
  OAuth.setTimestampAndNonce(message);
  OAuth.SignatureMethod.sign(message, accessor);

  var parameterMap = OAuth.getParameterMap(message.parameters);

  parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature)

  // Execute Ajax call for Yelp data
  var business,
      businessName,
      searchData;

  $.ajax({
    'url' : message.action,
    'data' : parameterMap,
    'cache' : true,
    'dataType' : 'jsonp',
    'jsonpCallback' : 'cb',
    'success' : function(data) {
      results = data.businesses;
      /* 
       * Temporary data population of appending the
       * business name to left hand list
       */
      for (result in results) {
        business = results[result];
        name = business.name;
        $('#places ul').append('<li>' + name + '</li');
        $('#places ul').append('<li>' + business.location.coordinate.latitude + ', ' + business.location.coordinate.longitude + '</li><br />');
      }
    },
    'error' : function(error) {
      console.log(error);
    }
  });
};

/*
 * Function to create Google Map markers
 * Documentation can be found here at 
 * http://bit.ly/1EuBEGb
 */
function addGoogleMarkers() {
  var marker = new google.maps.Marker({
    position: {lat: 37.76429, lng: -122.4307},
    map: map,
    title: 'My first marker!'
  });
};

// Create map on page 
initializeMap();

// Initiate Yelp data request
getYelpData('food');

// Add Google Markers based on Yelp request
addGoogleMarkers();

