// Dates

let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toTimeString());
console.log(typeof myDate);

let createDate = new Date("01-14-2023")
console.log(createDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));