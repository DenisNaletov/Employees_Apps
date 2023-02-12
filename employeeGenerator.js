const employee = new Employee();
const employees = new Employees();


class EmployeeGenerator {
    constructor(random) {
        this.random = random;
    }

// Prototype method getRandomEmployee() return employee
// {id:<number>, emailAddress:<string>, gender:<string> name:<string>,salary:<number>,title:<string>
// Gender allowed values: female, male
// Title allowed values: Wage Employee, Manager, Sales Person, Sales Manager

    getRandomEmployee = (number) => {
        if(number){
            for(let i =0; i<number; i++){
                employees.addEmployee(employee);
        }
            return (console.log(employees));
            return true;
        } else {
            throw new Error("Its NaN!");
            return false;
        }

    }

}


