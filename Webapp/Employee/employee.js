import {Person} from '../js/model/person.js'

class employee extends Person{
    constructor(name, salary, hireDate){
        super(name)
        this.salary=salary;
        this.hireDate=hireDate;
    }
    
    doJob(title){
console.log(`${this.names} is a ${title} who earns \$${this.salary} was hired ${this.hireDate}`)
    }
}

let jim = new employee("Jim Hanson", 245990.00 , new Date())

jim.doJob('Software Engineer');