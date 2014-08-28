
var jenny = (function* (){
	var val = '';
	while (true) {
		val = yield 'Got '+val;
	}
})();

console.log(jenny.next());
console.log(jenny.next(7));