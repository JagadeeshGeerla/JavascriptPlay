

// Condition: Functions should be nested and inner function should be returned.
// Condition: Inner function should be called from outside

function foo() {
    var x = 1;
    function bar() {
        return x++;
    }
    return bar;
}

var baz = foo();

console.log(baz());
console.log(baz());
console.log(baz());