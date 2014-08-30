/*    Wait.   What about the loos?  */
var geocode = require('./geocoder'),
	gbptm = require('./gbptm');

(function compareify(postcodeA, postcodeB) {
	var results = {};
	geocode(postcodeA, function(err, lonlat) {
		results[postcodeA] = {	lonlat: lonlat};
		// This already feels contrived
		gbptm.near(results[postcodeA].lonlat, function(err, loos) {
			results[postcodeA].loos = loos.length;
			// Oh hell now we have to do it all again
			geocode(postcodeB, function(err, lonlat) {
				// I need an editor with better brace matching perhaps tabwidth=2 would be better...
				results[postcodeB] = {lonlat: lonlat};
				gbptm.near(results[postcodeB].lonlat, function(err, loos) {
					// I'd refactor but I've lost my sense of identity
					results[postcodeB].loos = loos.length;
					console.log(results);
					console.log('Iä! Iä! Shub-Niggurath!');
				});
			});
		});
	});
})('NR11 8PB', 'NR3 1BN');