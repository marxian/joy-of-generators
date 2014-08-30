/*
	Generators can be consumers!
 */
var jenny = (function* () {
	var vals = [];
	while (true) {
		vals.push(yield null);
		console.log('You said "' + vals.join(' ') + '\"');
	}
})();

jenny.next();
jenny.next('Hello');
jenny.next('Nordev');