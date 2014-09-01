var koa = require('koa');
var app = koa();
var p = require('./promisified');

// X-Response-Time middleware
app.use(function *(next){
	var start = new Date();
	yield next;
	var ms = new Date() - start;
	this.set('X-Response-Time', ms + 'ms');
});

// Loo fetching middleware
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