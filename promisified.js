var promisify = require('bluebird').promisify,
	geocoder = require('./geocoder'),
	gbptm = require('./gbptm');

module.exports = {
	gbptm: promisify(gbptm),
	geocode: promisify(geocoder)
};