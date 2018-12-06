var foo = "foo";

(function bar(baz){

	var foo = "foo2";
	console.log(baz);	// "foo2"

})(foo);

console.log(foo);	// "foo"

/*
IIFE :
- Aim is to minimize global scope pollution and create privacy. Wrap the entire code in an IIFE to create privacy. 
- Identifier for the function can be invoked. What if there is no identifier? Then your functionality is safe.
- Parens() is simply a grouping operator to control precedence of execution. It can't contain statements.
It shud contain an expression to evaluate.
- The role of () is to disambiguate between function expressions and function declarations.
- You can pass parameters

*/

