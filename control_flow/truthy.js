const userEmail = "raja@1.ai"

if(userEmail) {
    console.log("Got user Email");
} else {
    console.log("Don't have user Email");
}


// falsy values

//false, 0, -0, BigInt 0n, "" null, undefined, NaN

// truthy value

// "0", 'false', " ", [], {}, function(){}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Colescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


// Terniary Operator

// Condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");