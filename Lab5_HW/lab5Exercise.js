// lab5
// 'use strict';

// question 1

let maxNum;

function max(x, y){
    if(x>y){
        maxNum = x;
    }
    else if(x<y){
       maxNum = y;
    }
    else{
    console.log(`${x} and ${y} are equal.`);
    }
    return maxNum;
};
console.log('answer for quesion 1 is, max of two is:   ' + max(4,5));


//question 2

function maxOfThree(x, y, z) {
    if (x > y && x > z) {
        maxNum = x;
    }
    if (y > x && y > z) {
        maxNum = y;
    }
    if ( z > x && z >y){
        maxNum=z;
    }
    else if (x===y && y===z)
    {
        console.log('equal');
    } return maxNum;
}
console.log(maxOfThree(6, 2, 3))


//question 3

let vowels = ["a","u","i", "o", "e"];
let bool = false;
function isVowel(word) {
    if (word.length === 1) {      
        for (let i = 0; i < vowels.length; i++) {
            if (word == vowels[i]){
                bool = true;}
            else {bool = false;}
        }       
    }return bool;
}
console.log(isVowel("e"));


//question 4

let add=0;
let prod = 1;
function sum(numbers){
    for(let i= 0; i<numbers.length; i++){
    add+=numbers[i];
    }
    return add;
}
console.log(sum([1,2,3,4]));

function multiply(numbers){
    for(let i= 0; i<numbers.length; i++){
    prod*=numbers[i];
    }
    return prod;
}
console.log(multiply([1,2,3,4]));


// question 5

let temp='';
function reversal(revers){
    for(let i = revers.length-1; i>=0; i--){
        temp  +=revers.charAt(i);
    }
    return temp;
}
console.log(reversal('hello world'));


//question 6

let biggest=0;
function findLongestWord(words){
    for(let i=0; i<words.length; i++){
        let count;
        count=words[i].length;
        if(count>biggest){
            biggest = count;
        }
    }
    return biggest;
}
console.log(findLongestWord(['hello', 'word', 'sdfgshdfh']))

//


