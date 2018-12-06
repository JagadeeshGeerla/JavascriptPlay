var foo = 'bar';

function bar() {
    var foo = 'baz';
    console.log(`From func bar: ${foo}`);
}

function baz(foo) {
    // foo = 'bam';    // An declared variable without an assignment has a value of 'undefined'
    bam = 'yay';  
    console.log('From func baz: ' + foo + ' ' + bam);  
}

bar();
baz();
console.log(foo);
console.log(bam);