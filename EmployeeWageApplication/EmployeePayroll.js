// Creating Employee Payroll 
class EmployeePayroll {
    constructor(id, name,gender, salary, startDate) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.salary = salary;
        this.startDate = startDate;

    }

    getDetails = () => `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender} Salary: ${this.salary}, Start Date: ${this.startDate}`;
}

// Initializing employeee attributes 
const emp1 = new EmployeePayroll(101, "Aman", "Male", 50000, "23/05/2024");
const emp2 = new EmployeePayroll(102, "Adarsh", 70000, "12/07/2024");

// Display the results
console.log(emp1.getDetails());
console.log(emp2.getDetails());