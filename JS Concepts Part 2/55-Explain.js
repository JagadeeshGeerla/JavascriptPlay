//LET in javascript
function foo(bar) {
	if(bar) {
		let baz = bar;
		if(baz) {
			let bam = baz;
		}
		console.log(bam);
	}
	console.log(baz);
}

foo('bar');