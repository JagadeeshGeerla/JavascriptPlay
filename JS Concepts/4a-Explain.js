
// var a;
// var b;
// console.log(a);
// console.log(b);
// a = b;
// b = 'b';
// console.log(a);
// console.log(b);

///////////////////////////////

function foo() {
    console.log("foo");
}
var foo;
// console.log(foo);
var bar;

foo();
foo=2;
//console.log(foo);     //??
bar = function () {
    console.log("bar");
}
bar();                  //??