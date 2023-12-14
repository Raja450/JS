// Singleton

//object literals


const mySym =Symbol("key1")


const jsUser = {
    name: "Raja",
    "full name": "Raja Sah",
    [mySym]: "myKey1",
    age: 22,
    location: "Kolkata",
    email: "raj822gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser [mySym]);

jsUser.email ="dyt555@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "pyg555@gmail.com"

console.log(jsUser)


jsUser.greeting = function() {
    console.log("Hello js user");
}

jsUser.greetingTwo = function() {
    console.log(`Hello Js USer, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());