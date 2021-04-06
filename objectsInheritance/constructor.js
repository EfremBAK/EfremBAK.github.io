
/*
CONSTRUCTOR FUNCTION
*/

// function User(name){
//   this.name=name;
//   this.isAdmin = false;
// }

// let user = new User("jack")

// console.log(user.name);
// console.log(user.isAdmin);

// function Student(id, name){
//   this.id = id;
//   this.name = name;
// }

// console.log(new Student(01, "anna"))
// console.log(new Student(02, "bob"));
// console.log(new Student(03, "carlos") )

function Person(){
    console.log(this);
    this.university = "MIU";
    this.year = 2021;
  }
  
  const faculty1 = new Person();
  
  Person.prototype.greet = function(){
    return ' Hi ' + this.university;
  }
  
  const greeting = faculty1.greet();
  console.log(greeting);








// let user = {
//     name: "jack",
//     isAdmin: false
// };

// let calculator = {
//     add: function(a,b){
//  return a+b;
//     },

//     multiply: function (a, b){
// return a*b;
//     }
// };