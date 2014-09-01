var request = require('request'),
	gbptm_root = 'http://gbptm-api-stage.herokuapp.com/';
module.exports = function(lonlat, callback) {
	var url = gbptm_root + 'loos/near/' + lonlat.join('/') + '?radius=1000';
	request.get({
		url: url,
		json: true
	}, function(err, res) {
		callback(err, res.body.features);
	});
};