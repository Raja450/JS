// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol

const score = 100
const scoreValue= 10.3

const isLoggedIn =false
const outsideTemp = null
let userEmail =undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// RReference Type (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "doga","virat"];
let myobj ={
    name: "Raja",
    age: 22,

}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);