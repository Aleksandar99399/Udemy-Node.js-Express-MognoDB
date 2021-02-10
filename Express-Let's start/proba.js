const { DateTime } = require('luxon');

// // Creating a date time object
// let date = new Date();
// console.log(date);

const date = DateTime.local().ts;
const time = Date.parse();

const asd = Date();

console.log(asd);

// Printing the date and time parts
// console.log(`Date: ${date.toLocaleString(DateTime.DATE_FULL)}`);
// console.log(`Time: ${date.toLocaleString(DateTime.TIME_24_WITH_LONG_OFFSET)}`);
