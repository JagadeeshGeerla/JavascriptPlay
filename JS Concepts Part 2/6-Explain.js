// The ability to nest functions gives us closures.
// Closure is when a function “remembers” its lexical scope even when the function is 
// executed outside that lexical scope.
// Condition: Functions should be nested and inner function should be returned.
// Condition: Inner function should be called from outside.

// function foo() {
//     var bar = 'bar';

//     setTimeout(function () {
//         console.log(bar);
//     }, 1000);

//     setTimeout(function () {
//         bar = 'baz';
//     }, 3000);

//     setTimeout(function () {
//         console.log(bar);
//     }, 5000);
// }

// foo();

// /******************* */
// for (var i = 1; i <= 5; i++) {
//     (function (j) {
//         setTimeout(function () {
//             console.log("i: " + j);
//         }, j * 1000);
//     })(i);
// }

// for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//         console.log("i: " + j);
//     }, j * 1000);
// }

// /**********The below works but not a closure */
// var foo = (function () {
//     var o = {bar:"bar"};

//     return {obj: o};
// })();

// console.log(foo.obj.bar);