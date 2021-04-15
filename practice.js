
// const car ={
//     "make": "Default",
//     "model": "Accord",
//     "color": "Red",
//     "drive": function(speed){
//         console.log(`The ${this.color} ${this.model} ${this.make} is driving at ${speed}`);
//     },
//     "stop": function(){
//         console.log(`The ${this.color} ${this.model} ${this.make} is stopping`);
//     }

// };

// // const x =car.stop();
// // console.log(x);

// const redOneAccord = Object.create(car);
// redOneAccord.make = "Honda";
// console.log(redOneAccord.drive(200));



// // //using constructor
// // function Cars(make, model, color){
// //     this.make=make;
// //     this.model = model;
// //     this.color = color;
// //     this.drive = function(speed){
// //         console.log(`The ${this.color} ${this.model} ${this.make} is driving at ${speed}`)
// //     };
// //     this.stop = function(){
// //         console.log(`The ${this.color} ${this.model} ${this.make} is stopping`)
// //     };
// // }

// // const RedHons = Object.create(Cars);
// // console.log(RedHons());


// // const arrayUtils = (function(){
// //     let count =0;
    
// // function multipleCount(nums, b){
    
//     // for (let i = 0; i < nums.length; i++) {
    
//     // if(nums[i]%b === 0){
//     //     count++;
//     // }}
  

// //    return nums => nums.filter(nums%b === 0);
// // })();

// // console.log(arrayUtils([1,2,3,4,5,6], 3)) 

class User {
constructor(name = "Anonymous") {
this.name = name;
}
sayHi() {
console.log(`Hello, ${this.name}!`);
}}
fred = new User();
console.log(fred);
console.log(fred.__proto__);
console.log(User.prototype);
fred.sayHi();
bob = new User("Bob");
console.log(bob);
bob.sayHi();




