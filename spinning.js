var thunkify = require('thunkify'),
	// A “thunk” is a function that returns a callback as opposed to calling it
	geocode = thunkify(require('./geocoder')),
	gbptm = thunkify(require('./gbptm'));

function* jenny(postcodes) {
	var results = {};
	for (var i=0; i<postcodes.length; i++) {
		var pc = postcodes[i],
			lonlat = yield geocode(pc),
			loos = yield gbptm(lonlat);
		
		results[pc] = {
			lonlat: lonlat,
			loos: loos.length
		};
	}
	console.log(results);
}

function spinning(gen) {
	function nextItem(err, result) {
    		var item = gen.next(result);
 
    		if (!item.done) {
      			item.value(nextItem);
    		}
  	}
  	
  	nextItem();
}

spinning(jenny(['NR11 8PB', 'NR3 1BN']));