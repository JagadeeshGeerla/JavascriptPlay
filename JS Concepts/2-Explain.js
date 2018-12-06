
function baz() {
     
    console.log(`I am baz`);

    function fred(){
        console.log(`I am fred`);
    }
    fred();
}

baz();
fred();             // Throws ref error, since it is out of scope.
                    // Only undeclared variables are declared global. Not undeclared functions.
