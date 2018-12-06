

function foo() {

	try {
		throw 'error';
	}
	catch (err) {
		console.log(err);
	}

	console.log(err);
}

foo();