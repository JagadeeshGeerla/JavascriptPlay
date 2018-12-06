// Module Pattern:
// 1) There must be an outer wrapping function that gets EXECUTED. Could be an IIFE. If its not an IIFE then it must getting executed. 
// 2) There must be an object returned from the executing function.
var foo = (function () {
	var publicAPI = {
		bar: function () {
			publicAPI.baz();
		},
		baz: function () {
			console.log("baz");
		}
	};
	return publicAPI;
})();

// foo.bar();		// "baz"
foo.abc = "abc";
console.log(foo);