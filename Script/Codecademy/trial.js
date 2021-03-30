// var x =history.length;
// document.getElementById("demo").innerHTML = x;

// function xcv(){
//     alert("booyas");
// }

// let okButton = document.getElementById("ok");

// okButton.onclick = okayclick;

/*2
window.onload = function(){
    var okayButton = document.getElementById("ok");
    okayButton.onclick = okayclick;
}

function okayclick(){
    // alert("wow");
    this.className = "highlighted";
}
*/
/*
const person ={
    'name': "efrem",
    'age': 28,
    'classes': ['wap','SA']
}
 const z = ['wap','SA']
for(const x in z){
    console.log(x);
}*/

/*
function findMax(){
    let max = -Infinity;
    for (let i = 0; i< arguments.length; i++){
        if(arguments[i]> max){
            max = arguments[i];
            
        }
       
    }
    return max;
    
}

const max1 = findMax(5,2,7,35);
console.log(max1);*/

/*
let x = 0;
function sum(v, ...more){
    
    for(let i =0;i<arguments.length;i++){
  x= x+arguments[i];
}
return x;
}
console.log(sum(1,2,3,4,54));
*/

//remember this code
const doubleEyeFun =[];
for (var i=1; i<5; i++){
    doubleEyeFun[i] = function(){
        return i*2;
    }
}
console.log(doubleEyeFun[1]());//10
console.log(doubleEyeFun[2]());//10
console.log(doubleEyeFun[3]());//10
console.log(doubleEyeFun[4]());//10

//but when we use 'let' then it will be a blcok variable and everytime
// we console.log(doubleEyeFun[x]()), the function is creating an array of size [x].
const doubleEyeFun =[];
for (var i=1; i<5; i++){
    doubleEyeFun[i] = function(){
        return i*2;
    }
}
console.log(doubleEyeFun[1]());//2
console.log(doubleEyeFun[2]());//4
console.log(doubleEyeFun[3]());//6
console.log(doubleEyeFun[4]());//8