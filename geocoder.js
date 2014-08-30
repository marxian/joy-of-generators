var request = require('request');

module.exports = function(postcode, callback){
	var req = request.get({
		url: 'http://mapit.mysociety.org/postcode/' + postcode,
		json: true
	}, function(err, res){
		callback(err, res ? [
			res.body.wgs84_lon,
			res.body.wgs84_lat
		] : null);
	});
};