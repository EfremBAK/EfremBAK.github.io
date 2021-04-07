let Person = {
    name: "",
    dob: null,
    getName: function(){
        return this.name;
    },
    setName: function(x){
        this.name = x;
    }
}
let john = Object.create(Person);
john.setName ("John");
john.dob = new Date(1998,12,10);
console.log(`the person's name is ${john.name}, ${john.name} was born on ${john.dob.getYear()}`);




//employee
//q2
const employee = Object.create(Person);
employee.salary = 0;
employee.hireDate = new Date();
employee.doJob = function(title){
    console.log(`${this.name} is a ${title}, and earns ${this.salary}`);
}
const anna = Object.create(employee);
anna.setName("Anna");
anna.salary = 249995.50;
anna.doJob("programmer");


//q3
function Persons(name, dob){
    this.name = name;
    this.dob = dob;
}
const peter = new Persons("Peter", new Date(1985,10,12));
Persons.prototype.toString = function(){
    return `Name: ${this.name}, DOB: ${new Intl.DateTimeFormat().format( this.dob)}`;
}

console.log(peter.toString());
