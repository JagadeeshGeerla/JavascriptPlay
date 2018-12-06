var foo = "foo";

(function bar(){

	var foo = "foo2";
	console.log(foo);	// "foo2"

})();	

console.log(foo);	// "foo"
bar(); //??
