
/*
    Callbacks can be of two types:
    1. Any function that another function calls
    2. Asynchronous callbacks - ie one that will get pushed
        on the callback queue. Delay the execution of a function to a later point in time. 
        eg: fetch external data
*/

function add(x, y) {
    return x + y
}

function higherOrderFunction(x, callback) {
    return callback(x, 5)
}

higherOrderFunction(10, add)

// Pyramid of doom/ Callback hell example

setTimeout(function(){
    console.log('one');
    setTimeout(function(){
        console.log('two');
        setTimeout(function(){
            console.log('three');
        },1000);
    }, 1000);
}, 1000);

////Callback is a continuation.
////////////////////////////////////////Continuation passing style
function one(cb){
    console.log('one');
    setTimeout(cb, 1000);
}
function two(cb){
    console.log('two');
    setTimeout(cb, 1000);
}
function three(cb){
    console.log('three');
}

one(function(){
    two(three);
});
///////////////////////////////////////
///What if we have to pass the callback function to some thirdparty(TP) function instead of SetTimeout??
///When we do this, we have done INVERSION OF CONTROL. 
///ie, we used to be in control of our program, but we have handed ove the control to TP function
///ie, We have trusted that the TP function will call our cb func on time, not before, not after, and with proper input parameters etc.
/// Imagine, the TP function has a bug and instead of calling the cb func once, it calls a hundred times!!!! 
/// What if the callback charges the customer credit card. Now you have allowed the TP func to charge your customer a hundred times!!

/// TO BE SOLVED:: This INVERSION OF CONTROL has to be solved!!
/// TO BE SOLVED:: Asynchronous code should look like a synchrnous code


//////////////GENERATORS (yield)
// Generator function constructs an iterator
// calling .next() will execute the code till a yield statement is encountered or till the end of the function 
// yield is a two way communication
function* gem() {
    console.log('Hello');
    yield null;
    console.log('World');
}

var it = gen();
it.next();  //prints 'Hello'
it.next();  //prints 'World'

//Anothe example. This example is synchronous. Find an example for asynchrnous generators
function* exampleFunc() {
    var x = 1 + (yield);
    var y = 1 + (yield);
    yield (x + y);
};

var run = exampleFunc();

run.next();
run.next(10);
console.log('Meaning of life: ' + run.next(30).value);

///// Is this example of async generators??? Doesnt work, didnt understand

function getData(data) {
    setTimeout(function(){
       // console.log(data);
        return data;
    }, 1000);
}

function* genFunc(){
    var x = 1 + (yield getData(10));
    var y = 1 + (yield getData(20));
    var answer = (yield getData(`Meaning of life ${x + y}`));

    console.log(`answer is ${answer}`);

}

var run = genFunc();

run.next();

///PROMISES : continuous events
/// Promises uninvert the inversion of control




