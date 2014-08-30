/*
	Infinite Sequences!
 */
function* fibonacci() {
    var prev = 0,
        curr = 1;
    while (true) {
        prev = curr;
        curr = prev + curr;
        yield curr;
    }
}

var fbn = fibonacci();
for (var i = 0; i < 8; i++) {
	console.log(
		fbn.next().value 
	);
}

