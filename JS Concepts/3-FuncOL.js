function baz() {
    console.log(`This is NO args func`);
}
function baz(foo, bar) {
    console.log(`This is 2 args func`);
}
function baz(foo) {
    console.log(`This is 1 arg func`);
}

baz();
baz(1);
baz(1, 2);

// var foo;
// foo = 10;
// var foo = 99;
// console.log(foo);