export class Person {
    constructor(names,dateOfBirth){
        this.names =names;
        this.dateOfBirth = dateOfBirth;
    }
    get names(){
        return this._name;
    }
    set names(xname){
        this._name= xname;
    }
    get dateOfBirth(){
        return this._dob;
    }
    set dateOfBirth(xdob){
        this._dob = xdob;
    }
    toString(){
        console.log(`{Name: ${this.names},
         DateOfBirth: ${this.dateOfBirth.getYear()} - ${this.dateOfBirth.getMonth()+1} - ${this.dateOfBirth.getDate()}}`);
    }
}