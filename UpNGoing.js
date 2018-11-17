// var foo = 'foo';

// (function bar(){
//     var foo = 'foo2';
//     console.log(foo);
// })();

// console.log(foo);

var J = function f1() {
        J = function f2() {console.log(J);};
        console.log('hi');
};

J();
J();