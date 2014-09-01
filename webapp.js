var koa = require('koa');
var app = koa();
var p = require('./promisified');

app.use(function *(){
	var postcodes = this.request.path.split('/').slice(1),
		results = {},
		coords = yield postcodes.map(function(pc) {
			return p.geocode(pc);
		}),
		loos = yield coords.map(function(lonlat) {
		 	return p.gbptm(lonlat);
		});

	postcodes.forEach(function(pc, i) {
		results[pc] = {
			coords: coords[i],
			loos: loos[i].length
		};
	});

	this.body = results;
});
app.listen(3000);