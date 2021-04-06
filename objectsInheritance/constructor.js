
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

/*function Person(){
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
*/

/*function Course(cname){
    this.cname= cname;
    console.log('constructor function invoked');
    //implicit return of 'this' when called via 'new'
}

//add function register to prototype of all course objects(created from //course constructor)
Course.prototype.register = function(){
    return 'Register ' + this.cname;
}

const wap = new Course('WAP');
console.log(wap);
console.log(wap.__proto__);
console.log(wap instanceof Course);
console.log(Course.prototype.register);
console.log(wap.register());
*/

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

 let obj = {}
 console.log(obj)