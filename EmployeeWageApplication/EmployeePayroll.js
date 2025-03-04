// Creating Employee Payroll
class EmployeePayroll {
    constructor(id, name, gender, salary, startDate) {
        this.id = id;
        
        // Validate name using Regex
        try {
            if (!/^[A-Z][a-zA-Z]{2,}$/.test(name)) {
                throw new Error("Invalid name! Name must start with a capital letter and have at least 3 characters.");
            }
            this.name = name;
        } catch (error) {
            console.error(error.message);
            return;
        }

        this.gender = gender;
        this.salary = salary;
        this.startDate = startDate;
    }

    getDetails = () => `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: ${this.salary}, Start Date: ${this.startDate}`;
}

// Initializing employee attributes with correct parameters
const emp1 = new EmployeePayroll(101, "Aman", "Male", 50000, "23/05/2024");
const emp2 = new EmployeePayroll(102, "Adarsh", "Male", 70000, "12/07/2024");
const emp3 = new EmployeePayroll(103, "Pu", "Female", 70000, "12/07/2024");

// Display the results only if the employee object is valid
if (emp1.name) console.log(emp1.getDetails());
if (emp2.name) console.log(emp2.getDetails());
if (emp3.name) console.log(emp3.getDetails());

