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
console.log(max1);