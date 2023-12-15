
// Singleton object
//const tinderUser = new Object()

// non singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name ="Sam"
tinderUser.isLoggedIn = false
console.log(tinderUser);


const regularUser ={
    email: "sam4442gmail.com",
    fullname: {
        userfullname: {
            firstname: "Raja",
            lastname: "Sah"

        }
    }
}
///console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 1:"b"}
const obj2 = {3: "a", 4:"b"}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedI'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
const {courseInstructor: instructor} =course
console.log(instructor);

// {
//     name: "raja",
//     coursename: "js in hindi",
//     price: "free"
// }