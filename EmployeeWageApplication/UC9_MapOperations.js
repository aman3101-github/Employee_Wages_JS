// Declare and initialize constant values related to employee wages and working hours
const WAGE_PER_HOUR = 20;       // Hourly wage rate
const FULL_TIME_HOURS = 8;      // Full-time work hours per day
const PART_TIME_HOURS = 4;      // Part-time work hours per day
const MAX_WORKING_DAYS = 20;    // Maximum working days in a month
const MAX_WORKING_HOURS = 160;  // Maximum working hours in a month
const FULL_TIME_WAGE = FULL_TIME_HOURS * WAGE_PER_HOUR;  // Wage earned for a full-time workday

 // Function to get the work hours based on the work type.
function getWorkHours(workType) {
    switch (workType) {
        case 1:
            return PART_TIME_HOURS;  // Return part-time hours
        case 2:
            return FULL_TIME_HOURS;  // Return full-time hours
        default:
            return 0;  // Return 0 for no work
    }
}

// Initialize total work hours and days worked
let totalHours = 0;
let totalDays = 0;

// Declare maps to store daily wages and work hours
let dailyWageMap = new Map();
let dailyHourMap = new Map();

// Calculate daily wages and hours until max conditions are met
while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    let workType = Math.floor(Math.random() * 3);  // Randomly assign work type (0, 1, or 2)
    let workHours = getWorkHours(workType);  // Get work hours based on work type

    // Ensure total working hours do not exceed the maximum allowed
    if (totalHours + workHours > MAX_WORKING_HOURS) {
        workHours = MAX_WORKING_HOURS - totalHours;
    }

    let dailyWage = workHours * WAGE_PER_HOUR;  // Calculate daily wage
    totalHours += workHours;  // Update total hours worked
    totalDays++;  // Increment total days worked

    // Store daily wage and work hours in maps
    dailyWageMap.set(totalDays, dailyWage);
    dailyHourMap.set(totalDays, workHours);
}

// Calculate total wage and total worked hours
let totalWage = Array.from(dailyWageMap.values()).reduce((sum, wage) => sum + wage, 0);
const totalWorkedHours = Array.from(dailyHourMap.values()).reduce((sum, hours) => sum + hours, 0);
console.log(`Total Wage: $${totalWage}, Total Hours Worked: ${totalWorkedHours} hrs`);

// Display day-wise wages
console.log("Day-wise Wages:", Array.from(dailyWageMap.entries()).map(([day, wage]) => `Day ${day}: $${wage}`));

// Filter and categorize days based on work hours
const fullWorkDays = Array.from(dailyHourMap.entries()).filter(([day, hours]) => hours === FULL_TIME_HOURS).map(([day]) => `Day ${day}`);
const partWorkDays = Array.from(dailyHourMap.entries()).filter(([day, hours]) => hours === PART_TIME_HOURS).map(([day]) => `Day ${day}`);
const noWorkDays = Array.from(dailyHourMap.entries()).filter(([day, hours]) => hours === 0).map(([day]) => `Day ${day}`);

// Display days with full-time wages
let fullTimeDays = fullWorkDays;
console.log("Days with Full-Time Wage:", fullTimeDays);

// Find the first occurrence of full-time wage
let firstFullTimeDay = fullTimeDays.length > 0 ? fullTimeDays[0] : "Never";
console.log("First Full-Time Wage Earned On:", firstFullTimeDay);

// Check if all full-time wage entries are exactly 160
let isEveryFullTime = fullTimeDays.every(day => dailyWageMap.get(parseInt(day.split(" ")[1])) === FULL_TIME_WAGE);
console.log("Is Every Full-Time Wage Exactly 160?", isEveryFullTime);

// Check if any part-time wage was earned
let hasPartTimeWage = partWorkDays.length > 0;
console.log("Is there any Part-Time Wage?", hasPartTimeWage);

// Count the number of days the employee actually worked
let daysWorked = fullWorkDays.length + partWorkDays.length;
console.log(`Total Days Employee Worked: ${daysWorked}`);
