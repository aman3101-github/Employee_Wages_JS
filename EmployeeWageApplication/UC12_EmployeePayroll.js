// Creating Employee Payroll 
class EmployeePayroll {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getDetails = () => `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`;
}

// Initializing employeee attributes 
const emp1 = new EmployeePayroll(101, "Aman", 50000);
const emp2 = new EmployeePayroll(102, "Adarsh", 70000);

// Display the results
console.log(emp1.getDetails());
console.log(emp2.getDetails());