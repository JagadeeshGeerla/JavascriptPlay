var foo = 'bar';

function bar() {
    var foo = 'baz';
    console.log(`From func bar`);
    console.log(foo);
}

function baz(foo) {     // Parameter foo is declared here
    foo = 'bam';
    bam = 'yay';        // bam gets declared globally during 2nd run(execution phase)
    console.log(`From func baz`);
    console.log(foo + ' ' + bam);
   // console.log(arguments);   
}

bar();
baz();  // Gets called even if no arguments are passed. The parameter value stays undefined.

// baz('Hey', 'Hello', 'There');