		/*
			You can throw errors onto a generator!
		 */
		var jenny = (function* errorProne() {
			var vals = [];
			while (true) {
				try {
					vals.push(yield null);
					console.log('You said "' + vals.join(' ') + '\"');
				} catch(e) {
					console.error("You're a " + e.message);
				}
			}
		})();

		jenny.next();
		jenny.throw(new Error("Teapot!"));