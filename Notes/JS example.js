var foo = "bar";

function bar() {
	var foo = "baz";
	
	function baz(foo){
		foo="bam";
		bam="yay";
	}
	baz(); //in JS, you can call function without passing paramaeters
}

bar();
foo;
bam;
baz(); //out of scope

/*****Function expression*****************/

var foo = function bar() {
	var foo = "baz";
	
	function baz(foo){
		foo="bam";
		bam="yay";
	}
	baz(); 
}

foo();
bar();

/****Block Scope******/
//Catch is block scoped
var foo;

try{
	foo.length;
}
catch(err){
	console.log(err); 
}

console.log(err); //Reference error

/**************/
//Evil eval
var bar ="bar";
function foo(str){
eval(str);
console.log(bar);
}

foo("var bar=42;");
/**********/
//the more evil with
var obj = {
a: 2, 
b:3, 
c:4
};

obj.a=obj.b+obj.c;
obj.c=obj.b-obj.a;

with(obj){
a=b+c;
c=b-a;
d=3; //Hey scope of with obj, do you know variable d? No. Hey global scope, do u? I just created it for you
}

obj.d; //undefined
d; //3

/****** IIFE****/
//Could be anonymous or named
var foo="foo";

(function(){
	var foo="foo2";
	console.log(foo); //"foo2"
})();

console.log(foo); //"foo"

/***********LET*****/
//Let keyword will hijack implicitly the scope of whatever block it appears in.

function foo(bar){
	if(bar){
		let baz=bar;
		if(baz){
			let bam=baz;
		}
		console.log(bam); //Error
	}
console.log(baz); //Error
}

foo("bar");

/********HOISTING******/
//Example 1:
{console.log("1 "+ a); //??
console.log("2 "+ b)	//??
var a = b;
var b = 2;
console.log("3 "+ b);	//2
console.log("4 "+ a);}	//??

//Hoisted as below
var a;
var b;
console.log("1 "+ a);
console.log("2 "+ b);
a = b;
b = 2;
console.log("3 "+ b);
console.log("4 "+ a);

//Example 2
var a = b();
var c = d();
console.log(a);	//??
console.log(c);	//??

function b(){
	return c;
}

var d = function(){
	return b();
};

//Hoisted as below
//Function declaration gets hoisted but NOT func expression

function b(){
	return c;
}
var a;
var c;
var d;
a=b();
c=d();
console.log(a); //??
console.log(b); //??
d = function(){
	return b();
};

//FUNCTIONS ARE HOISTED BEFORE VARIABLES. Example 3 proves it
//Example 3
foo();

var foo = 2;

function foo() {
	console.log("bar");
}

function foo(){
	console.log("foo");
}

//Hoisted
function foo() {
	console.log("bar");
}

function foo(){
	console.log("foo");
}

var foo;

foo();

foo=2;