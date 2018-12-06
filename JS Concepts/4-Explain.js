// Declaration: function keyword should be first word in the STATEMENT(not line), else its an expression.
// 
var foo = function bar() {
	var foo = "baz";

    function baz(foo) {
		foo = bar;			// Named function instead of anonymous helps you to refer it
		console.log(`Value of foo ${foo}`);
	}
	baz();
};

foo();