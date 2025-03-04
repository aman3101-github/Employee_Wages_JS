const NUM_OF_WORKING_DAYS = 20;
const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
let empHrs = 0;

 // Function to get work hours based on work type
 
 function getWorkHours(workType) {
    switch (workType) {
        case 1:
            console.log("Employee worked Part Time");
            return PART_TIME_HOURS;
        case 2:
            console.log("Employee worked Full Time");
            return FULL_TIME_HOURS;
        default:
            console.log("Employee did not work");
            return 0;
    }
}

for(let day = 0; day<NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random()*10) % 3;
    empHrs += getWorkHours(empCheck);
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs: "  + empHrs); 
console.log("Emp Wage: " + empWage);