function foo() {
    console.log("foo");
}
var foo;
var bar;

foo();
foo=2;
bar();                  //??
//console.log(foo);     //??
bar = function () {
    console.log("bar");
}