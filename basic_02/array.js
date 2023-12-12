// array

const myArr = [0, 1, 2 ,3, 4, 8]

const myHeros =["papa", "Brother"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[5]);

// Array methods

// myArr.push(6)
// myArr.push(8)
// myArr.pop()

myArr.unshift(9)
myArr.shift()

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(8))

const newArr =myArr.join()

console.log(myArr);
console.log(newArr);

// slice, splice

console.log("A", myArr);

const myn1 =myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);


const myn2 =myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);


const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros =["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

marvel_heros.concat(dc_heros)
console.log(marvel_heros);
