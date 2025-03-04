// Declare and intitalize the constant value 
const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
const FULL_TIME_WAGE = FULL_TIME_HOURS * WAGE_PER_HOUR;

// Function to get the work hours of an employee
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

// Initialize the varaibles to zero
let totalHours = 0;
let totalDays = 0;
// Declare arrays to store daily wages and daily records
let dailyWages = []; 
let dailyRecords = []; 

// 
while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    let workType = Math.floor(Math.random() * 3); 
    let workHours = getWorkHours(workType);
    
    if (totalHours + workHours > MAX_WORKING_HOURS) {
        workHours = MAX_WORKING_HOURS - totalHours; 
    }

    let dailyWage = workHours * WAGE_PER_HOUR;
    totalHours += workHours;
    totalDays++;

    dailyWages.push(dailyWage);
    dailyRecords.push({ day: totalDays, wage: dailyWage }); 
}

// Calculate total wage using reduce method 
let totalWage = dailyWages.reduce((sum, wage) => sum + wage, 0);
console.log(`Total Monthly Wage: $${totalWage}`);

// Map to display the daily wage record
let dailyWageMap = dailyRecords.map(record => `Day ${record.day}: $${record.wage}`);
console.log("Daily Wages with Days:", dailyWageMap);

// Displaying Days when Full time wage of 160 were earned using filter function
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

// Find the number of days the Employee Worked
let daysWorked = dailyRecords.filter(record => record.wage > 0).length;
console.log(`Total Days Employee Worked: ${daysWorked}`);