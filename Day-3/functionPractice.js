
// function takes some input and precess it and produce the output
//using function we decrease the lines of code 
// for example if we want to write the same piece of code again and again so that make encapsulate in the function and use it everywhere in the code 
// funtions can be created in the two ways 1)function statement 2) Function Expression

//example of fucntion statement 

//a,b are function parameter and also called as placeholders
// while declaration it is called as paramerts 
function fun(a,b) {
    return a+b;
}



//exmaple for function expression we are assigning function to a varaible
//c,d are function parameter and also called as placeholders
// while declaration it is called as paramerts 
const multiply = function (x) {
    return x*2;
}


//default parameters of a function  

//a=0 , b=0 are the default parameters if you dont send any parameter a=0,b=0 are applied
// division() valid then a=0,b=0 
//division(10) then a=10 and b=0;
//division(10,20) then a=20 and b=20
function  division(a=0,b=0) {
    return a/b;
}


function restExample(...rest) {
    console.log(rest)
}


// if we have any parameters then we need to use ...rest at the last only dont use front or middle 
function restExample2(a,b,...rest) {
    console.log(a,b,rest)
}
restExample(1,2,3,4,5,6);
restExample2(1,2,3,5,57,7,8,8)



const result = fun(1,3); // while calling the function it is called as argumanets 
console.log(multiply(result))



//nesteed function 
//function inside a fucntion is called as nested fucntion 

function parent () {
    function Children1() {
        console.log("children1...")
    }
 
    return function Children2 () {
        console.log("Children2....")
    }
}

const temp = parent();
temp();



//callback functions-> a Fucntion which is passed to another function  as a argument and later somepint of time that function is executed

function call(callback) {
    console.log("call is called....")
    callback();
}

call(()=> {
    console.log("Anonymous Callback function is Called....")
}) // in this we passed another anonymous function as an arguament we can also pass the named function as an argument


function callback() {
    console.log("Named Callback function is Called...")
}

//here named function is passed to another function 
call(callback);


//higher order function -----------------------
//higher order functions are the function which returns the another function inside one function 

function outerhof() {
    return function innerhof(){
        console.log("Inner hof called")
    }
}

const outerHofVariable = outerhof();
outerHofVariable();


const arrowFunction = (callback) => {
    console.log("Arraow Fucntion called....")
    callback();
}
arrowFunction(()=>{
    console.log("Arrow callback is called")
});


//IIFE(immediately invoked function expreswsion)
//this function invoked immediately after decalration we dont need to explicitly called this function 
(function(callback,...rest) {
    console.log("IFEE Called")
    console.log(rest)
    callback();
})(()=> {
    console.log("IFEE Callback is called...")
},2,3,4)



function recursion(count) {
    console.log("recusion function called....",count);
    if(count==0) {
        return;
    }
    recursion(count-1)
}
recursion(5)