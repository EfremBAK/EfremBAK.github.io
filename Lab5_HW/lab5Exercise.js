// lab5
'use strict';
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
console.log('answer for quesion 1 is:   ' + max(4,5));



//question 2

