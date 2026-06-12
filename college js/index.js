// let number=parseInt(prompt("Enter Your Number."));;


// if(number>0){
//     console.log(`${number} is positive number.`)
// }
// else if(number<0){
//     console.log(`${number} is negaive number.`)
// }
// else
// {
//     console.log("the number is Zero.");
// }


let letter=prompt("Enter Your character.. :")
let array=['a','e','i','o','u','A','E','I','O','U']

if(letter.length==1){
    if(array.includes(letter)){
        console.log(`${letter} is a vowel.`);
    }
    else{
        console.log(`${letter} is a consonant`);
        
    }
}
else{
    console.log("Please Enter A single Character.")
}

function isPalindrome(str) {

    const cleanStr = str.toLowerCase();
    
    const reversedStr = cleanStr.split("").reverse().join("");
    
    return cleanStr === reversedStr;
}

const testWord1 = "Madam";
const testWord2 = "Himanshu";

console.log(`Is "${testWord1}" a Palindrome? -> ${isPalindrome(testWord1)}`); 
console.log(`Is "${testWord2}" a Palindrome? -> ${isPalindrome(testWord2)}`);




function calculateFactorial(num) {
    
    if (num < 0) {
        return "Error: Negative numbers ka factorial nahi hota bhai!";
    }
    
    
    if (num === 0 || num === 1) {
        return 1;
    }
    
    let result = 1;
    
    for (let i = 2; i <= num; i++) {
        result *= i; 
    }
    
    return result;
}


const numberToTest = 5;
console.log(`Factorial of ${numberToTest} is -> ${calculateFactorial(numberToTest)}`); 
console.log(`Factorial of 0 is -> ${calculateFactorial(0)}`); 