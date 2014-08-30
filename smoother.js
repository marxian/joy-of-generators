var co  = require('co'),
	promisify = require('bluebird').promisify,
	gbptm = promisify(require('./gbptm').near),
	geocode = promisify(require('./geocoder'));

co(function* (postcodes) {
	var results = {};
	var coords = yield postcodes.map(function(pc) {
		return geocode(pc);
	});
	var loos = yield coords.map(function(lonlat) {
	 	return gbptm(lonlat);
	});
	
	postcodes.forEach(function(pc, i) {
		results[pc] = {
			coords: coords[i],
			loos: loos[i].length
		};
	});

	console.log(results);
	
})(['NR11 8PB', 'NR3 1BN']);