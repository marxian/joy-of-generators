		/*
			Generator functions
			

			* Get a star!
			* Return a generator object
			* Which has a `next` method
			* Can contain the `yield` keyword
			
		 */

		function* jenny() {
			yield 'foo';
			yield 'bar';
		}

		var gen = jenny();
		console.log(gen.next());
		console.log(gen.next());
		console.log(gen.next());