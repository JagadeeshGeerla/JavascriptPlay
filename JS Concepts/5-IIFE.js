var foo = "foo";
var baz = 'baz';

(function bar(fred, zap){

	var foo = "foo2";
	console.log(foo);	// "foo2"
	console.log(fred);	
	console.log(zap);	
})(baz);	

// (function bar(){

// 	var foo = "foo2";
// 	console.log(foo);	// "foo2"

// })();	

console.log(foo);	// "foo"
//bar(); //??
