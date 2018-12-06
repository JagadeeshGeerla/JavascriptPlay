
function baz() {
     
    console.log(`I am baz`);

    function fred(){
        console.log(`I am fred`);
    }
    fred();
}

baz();
fred();   // ???
