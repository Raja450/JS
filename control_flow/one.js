// if

const temperature =11

if(temperature < 50){
    console.log("less then 20");
    
}
else{
console.log("temperature is greater than 20");
}

const score = 200

if(score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}


const balance = 1000

if(balance >500) console.log("test");

if(balance > 500) {
    console.log("less than 500");
} else if (balance <750) {
    console.log("less than 750");
} else if(balance <900) {
    console.log("less than 900");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle =false
const loggedInFromEmail =true

if(userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}