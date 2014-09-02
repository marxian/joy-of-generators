		var co  = require('co'),
			promisify = require('bluebird').promisify,
			thunkify = require('thunkify'),
			gbptm = promisify(require('./gbptm')),
			geocode = thunkify(require('./geocoder'));

		co(function* (postcodes) {
			var results = {},
				coords = yield postcodes.map(function(pc) {
					return geocode(pc);
				}),
				loos = yield coords.map(function(lonlat) {
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