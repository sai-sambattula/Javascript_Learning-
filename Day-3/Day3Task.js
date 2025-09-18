
// Write a Function to Convert Celsius to Fahrenheit (fucntion)
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) * 32;
}

const celsius = celsiusToFahrenheit(5);
console.log(celsius)


// Create a Function to Find the Maximum of Two Numbers
const findMax = function(num1,num2) {
    return num1 > num2 ? num1 : num2;
}

const maxNumber = findMax(-1,-2);
console.log(maxNumber)

//Function to Check if a String is a Palindrome
const isPalindrome = (str) =>{
    console.log(str.length);
    const orgstr = str;
    let temp =''
    for(let i=str.length;i>=0;i--) {
        temp += str[i]
    }
    if(temp==orgstr) {
        return true;
    }
    else {
        return false;
    }
}
const checkispalindrome = isPalindrome("Sai");
console.log(checkispalindrome)


//Write a Function to Find Factorial of a Number

function fact(number) {
    // console.log(number)
    if(number==0 || number==1) {
        return 1;
    }
    return number * fact(number-1)
}
console.log(fact(5));

// countVowels(str)

function countVowels(str) {
    console.log(typeof str)
    if(typeof str == 'string'){
       str=str.toLowerCase();
    }
    let count = 0;

    for(let i=0;i<str.length;i++) {
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u') {
            count+=1;
        }
    }
    return count;

}
const vowelCnt = countVowels("SaI");
console.log(vowelCnt);


//iife
(function (name) {
    console.log("Hello "+ `${name}`)
})("sai")


// capitalizeWords(sentence)
function capitalizeWords(sentence) {
    const splitStrarr = sentence.split(" ");
    let helperStr = '';
    for(let i=0;i<splitStrarr.length;i++) {
        // console.log(splitStrarr[i])
        let tempHelperStr = '';
        for(let j=0;j<splitStrarr[i].length;j++) {
            if(j==0) {
                tempHelperStr = tempHelperStr + splitStrarr[i][0].toUpperCase();
            }
            else {
                tempHelperStr = tempHelperStr + splitStrarr[i][j]
            }
        }
        helperStr =  helperStr + ` ${tempHelperStr}`
    }
    console.log(helperStr.trim())
}
capitalizeWords("The quick brown fox jumps over the lazy dog.")

function greet(name,callback) {
    callback(name);
}
greet("Sai",(name)=> {
    console.log(`hello ${name}`)
})
