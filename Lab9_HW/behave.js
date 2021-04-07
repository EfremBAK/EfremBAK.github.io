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
john.name = "John";
john.dob = new Date(2012/12/12);
console.log(john.dob)
