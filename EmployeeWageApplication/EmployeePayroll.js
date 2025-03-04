// Creating Employee Payroll
class EmployeePayroll {
    constructor(id, name, gender, salary, startDate) {
        try {
            // Validate Employee ID (Nonzero Positive Number)
            if (!/^[1-9]\d*$/.test(id)) {
                throw new Error("Invalid ID! Employee ID must be a nonzero positive number.");
            }
            this.id = id;

            // Validate Name (Starts with Capital Letter, at least 3 characters)
            if (!/^[A-Z][a-zA-Z]{2,}$/.test(name)) {
                throw new Error("Invalid Name! Name must start with a capital letter and have at least 3 characters.");
            }
            this.name = name;

            // Validate Gender (Must be 'M' or 'F')
            if (!/^[MF]$/.test(gender)) {
                throw new Error("Invalid Gender! Gender must be 'M' or 'F'.");
            }
            this.gender = gender;

            // Validate Salary (Nonzero Positive Number)
            if (!/^[1-9]\d*$/.test(salary)) {
                throw new Error("Invalid Salary! Salary must be a nonzero positive number.");
            }
            this.salary = salary;

            // Validate Start Date (Not a Future Date)
            let today = new Date();
            let empStartDate = new Date(startDate);
            if (empStartDate > today) {
                throw new Error("Invalid Start Date! Start date cannot be in the future.");
            }
            this.startDate = startDate;

        } catch (error) {
            console.error(error.message);
            return;
        }
    }

    // Method to display employee details
    getDetails = () => `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: ${this.salary}, Start Date: ${this.startDate}`;
}

// Initializing employee attributes with parameters
const emp1 = new EmployeePayroll(101, "Aman", "M", 50000, "2024-05-23"); 
const emp2 = new EmployeePayroll(102, "Adarsh", "M", 70000, "2024-07-12"); 
const emp3 = new EmployeePayroll(103, "Pu", "F", 70000, "2024-07-12"); 
const emp4 = new EmployeePayroll(0, "Ravi", "M", 60000, "2024-06-01"); 
const emp5 = new EmployeePayroll(104, "Ankush", "M", 90000, "2024-03-10"); 
const emp6 = new EmployeePayroll(105, "Raj", "M", -40000, "2024-01-15");
const emp7 = new EmployeePayroll(106, "Bhagwan", "M", 55000, "2025-12-01"); 

// Display results only if the object was created successfully
const employees = [emp1, emp2, emp3, emp4, emp5, emp6, emp7];
employees.forEach(emp => {
    if (emp.name) console.log(emp.getDetails());
});
