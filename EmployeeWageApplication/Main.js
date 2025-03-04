// Constants for employee wage calculations
const WAGE_PER_HOUR = 20;        
const FULL_TIME_HOURS = 8;      
const PART_TIME_HOURS = 4;      
const MAX_WORKING_DAYS = 20;     
const MAX_WORKING_HOURS = 160;  
const FULL_TIME_WAGE = FULL_TIME_HOURS * WAGE_PER_HOUR; 

 // Function to determine work hours based on work type.
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

// Variables to track total working hours and days
let totalHours = 0;
let totalDays = 0;

// Array to store daily wage details
let dailyRecords = []; 
// Map to store wages by day
let dailyWageMap = new Map(); 
// Map to store working hours by day 
let dailyHourMap = new Map();
// Array to store structured daily records  
let empDailyData = [];  

// Loop until maximum working days or hours are reached
while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    // Generate a random work type
    let workType = Math.floor(Math.random() * 3);
    let workHours = getWorkHours(workType);

    // Validate total hours do not exceed maximum allowed
    if (totalHours + workHours > MAX_WORKING_HOURS) {
        workHours = MAX_WORKING_HOURS - totalHours;
    }

    // Calculate daily wage
    let dailyWage = workHours * WAGE_PER_HOUR;
    
    // Update total hours and days worked
    totalHours += workHours;
    totalDays++;

    // Store daily records in different structures
    dailyWageMap.set(totalDays, dailyWage);
    dailyHourMap.set(totalDays, workHours);
    
    empDailyData.push({
        day: totalDays,
        hoursWorked: workHours,
        wageEarned: dailyWage
    });

    // Populate dailyRecords for later filtering
    dailyRecords.push({
        day: totalDays,
        wage: dailyWage
    });
}

// Display complete employee work data (list of daily records)
console.log("Employee Work Data:", empDailyData);

// Compute total wage and total hours worked
const totalWage = empDailyData.reduce((sum, record) => sum + record.wageEarned, 0);
const totalWorkedHours = empDailyData.reduce((sum, record) => sum + record.hoursWorked, 0);
console.log(`Total Wage: $${totalWage}, Total Hours Worked: ${totalWorkedHours} hrs`);

// Use a proper filtering approach to display full-time workdays
console.log("Full Working Days:");
empDailyData.forEach(record => {
    if (record.hoursWorked === FULL_TIME_HOURS) {
        console.log(`Day ${record.day}`);
    }
});

// Retrieve and display part-time workdays
const partWorkDays = empDailyData
    .filter(record => record.hoursWorked === PART_TIME_HOURS)
    .map(record => `Day ${record.day}`);
console.log("Part Working Days:", partWorkDays);

// Retrieve and display no-work days
const noWorkDays = empDailyData
    .filter(record => record.hoursWorked === 0)
    .map(record => `Day ${record.day}`);
console.log("No Working Days:", noWorkDays);

// Ensure `dailyRecords` contains data for filtering full-time wage days
let fullTimeDays = dailyRecords.filter(record => record.wage === FULL_TIME_WAGE);
console.log("Days with Full-Time Wage:", fullTimeDays.map(record => `Day ${record.day}`));

// Find the first occurrence of a full-time wage
let firstFullTimeDay = dailyRecords.find(record => record.wage === FULL_TIME_WAGE);
console.log("First Full-Time Wage Earned On:", firstFullTimeDay ? `Day ${firstFullTimeDay.day}` : "Never");

// Verify if every full-time wage is exactly the expected amount
let isEveryFullTime = fullTimeDays.every(record => record.wage === FULL_TIME_WAGE);
console.log("Is Every Full-Time Wage Exactly $160?", isEveryFullTime);

// Check if there was any part-time wage earned
let hasPartTimeWage = dailyRecords.some(record => record.wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is there any Part-Time Wage?", hasPartTimeWage);

// Count total days worked properly using `dailyRecords`
let daysWorked = dailyRecords.filter(record => record.wage > 0).length;
console.log(`Total Days Employee Worked: ${daysWorked}`);
