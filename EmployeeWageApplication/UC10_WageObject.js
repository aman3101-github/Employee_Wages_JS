// Constants for wage calculation
const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Full-time daily wage
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

// Variables to track total hours and days worked
let totalHours = 0;
let totalDays = 0;

// Data structures to store employee wage details
let dailyRecords = []; 

// Map to store daily wage by day
let dailyWageMap = new Map(); 
// Map to store daily working hours by day 
let dailyHourMap = new Map();  
// Array to store employee daily records as objects
let empDailyData = [];         

// Loop to calculate wages until max working days or hours reached
while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    // Random work type
    let workType = Math.floor(Math.random() * 3);  
    // Get work hours based on work type
    let workHours = getWorkHours(workType); 
    
    // Ensure total hours do not exceed the max allowed working hours
    if (totalHours + workHours > MAX_WORKING_HOURS) {
        workHours = MAX_WORKING_HOURS - totalHours; 
    }

    // Calculate daily wage
    let dailyWage = workHours * WAGE_PER_HOUR;
    // Update total hours worked
    totalHours += workHours;
    // Increase day count 
    totalDays++;

    // Store daily wage and hours in maps
    dailyWageMap.set(totalDays, dailyWage);
    dailyHourMap.set(totalDays, workHours); 

    // Store daily record as an object in an array
    empDailyData.push({
        day: totalDays,
        hoursWorked: workHours,
        wageEarned: dailyWage
    });

    // ✅ Fix: Add daily record to dailyRecords
    dailyRecords.push({
        day: totalDays,
        wage: dailyWage
    });
}

// Display all employee work data
console.log("Employee Work Data:", empDailyData);

// Calculate total wage and total hours worked using reduce function
let totalWage = Array.from(dailyWageMap.values()).reduce((sum, wage) => sum + wage, 0);
const totalWorkedHours = Array.from(dailyHourMap.values()).reduce((sum, hours) => sum + hours, 0);
console.log(`Total Wage: $${totalWage}, Total Hours Worked: ${totalWorkedHours} hrs`);

// Display daily wages
console.log("Day-wise Wages:", Array.from(dailyWageMap.entries()).map(([day, wage]) => `Day ${day}: $${wage}`));

// Categorizing workdays based on hours worked
const fullWorkDays = Array.from(dailyHourMap.entries()).filter(([day, hours]) => hours === FULL_TIME_HOURS).map(([day]) => `Day ${day}`);
const partWorkDays = Array.from(dailyHourMap.entries()).filter(([day, hours]) => hours === PART_TIME_HOURS).map(([day]) => `Day ${day}`);
const noWorkDays = Array.from(dailyHourMap.entries()).filter(([day, hours]) => hours === 0).map(([day]) => `Day ${day}`);

// Filter records for full-time work
let fullTimeDays = dailyRecords.filter(record => record.wage === FULL_TIME_WAGE);
console.log("Days with Full-Time Wage:", fullTimeDays.map(record => `Day ${record.day}`));

// Find first occurrence of full-time wage
let firstFullTimeDay = dailyRecords.find(record => record.wage === FULL_TIME_WAGE);
console.log("First Full-Time Wage Earned On:", firstFullTimeDay ? `Day ${firstFullTimeDay.day}` : "Never");

// Check if every full-time wage is exactly as expected
let isEveryFullTime = fullTimeDays.every(record => record.wage === FULL_TIME_WAGE);
console.log("Is Every Full-Time Wage Exactly 160?", isEveryFullTime);

// Check if there was any part-time wage earned
let hasPartTimeWage = dailyRecords.some(record => record.wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is there any Part-Time Wage?", hasPartTimeWage);

// Count total days employee worked
let daysWorked = dailyRecords.filter(record => record.wage > 0).length;
console.log(`Total Days Employee Worked: ${daysWorked}`);
