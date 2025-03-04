const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
const FULL_TIME_WAGE = FULL_TIME_HOURS * WAGE_PER_HOUR;


 // Function to get work hours based on work type
function getWorkHours(workType) {
    switch (workType) {
        case 1:
            return PART_TIME_HOURS;
        case 2:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// Initialize variables to zero
let totalHours = 0;
let totalDays = 0;

// Declare arrays to store daily records
let dailyRecords = []; 

// Map to store the Day and the Daily wage along with the Total wage 
let dailyWageMap = new Map();

// Calculate the total wage, daily wage
while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    let workType = Math.floor(Math.random() * 3); 
    let workHours = getWorkHours(workType);
    
    if (totalHours + workHours > MAX_WORKING_HOURS) {
        workHours = MAX_WORKING_HOURS - totalHours; 
    }

    let dailyWage = workHours * WAGE_PER_HOUR;
    totalHours += workHours;
    totalDays++;

    // Store day-wise wage in the Map
    dailyWageMap.set(totalDays, dailyWage);

    // Store daily work records properly
    dailyRecords.push({ day: totalDays, wage: dailyWage });
}

// Calculate the total wage 
let totalWage = Array.from(dailyWageMap.values()).reduce((sum, wage) => sum + wage, 0);
console.log(`Total Monthly Wage: $${totalWage}`);

console.log("Day-wise Wages:", Array.from(dailyWageMap.entries()).map(([day, wage]) => `Day ${day}: $${wage}`));

// Displaying Days when Full time wage of 160 was earned using filter function
let fullTimeDays = dailyRecords.filter(record => record.wage === FULL_TIME_WAGE);
console.log("Days with Full-Time Wage:", fullTimeDays.map(record => `Day ${record.day}`));

// Find the first occurrence when Full Time Wage was earned using find function
let firstFullTimeDay = dailyRecords.find(record => record.wage === FULL_TIME_WAGE);
console.log("First Full-Time Wage Earned On:", firstFullTimeDay ? `Day ${firstFullTimeDay.day}` : "Never");

// Check if Every Element of Full Time Wage is truly holding Full time wage
let isEveryFullTime = fullTimeDays.every(record => record.wage === FULL_TIME_WAGE);
console.log("Is Every Full-Time Wage Exactly 160?", isEveryFullTime);

// Check if there is any Part Time Wage
let hasPartTimeWage = dailyRecords.some(record => record.wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is there any Part-Time Wage?", hasPartTimeWage);

// Count days where an employee actually worked
let daysWorked = dailyRecords.filter(record => record.wage > 0).length;
console.log(`Total Days Employee Worked: ${daysWorked}`);
