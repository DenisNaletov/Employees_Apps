class Employees {
    constructor() {
        this.data = {}
    }

    // Prototype method add(employee) inserting employee object into this.data
    // and returning true or false if an employee with the given id exists

    addEmployee = (employee) => {
        if(this.data[employee.id]) {
            throw new Error('This ID is not found!');
            return false;
        } else {
            this.data[employee.id] = employee;
            return true;
        }
    }

    // Prototype method get(id) returning an employee object with the given id

    get = (id) =>{
        if(this.data[id]) {
            return this.data[id];
        }
        else throw new Error('This user not found!')
    }

    // Prototype method getAll() returning array of all employee objects

    getAll= () => {
        return Array.values[this.data];
    }

    // Prototype method remove(id) removing an employee object with the given id
    // and returning true or false if an employee with the given id doesn’t exist

    remove = (id) => {
        if(this.data[id]){
            delete this.data[id];
            return true;
        }
        else {throw new Error('This user is not exist!');
            return false;}
    }

}