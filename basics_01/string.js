const name = "Raja"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rajagfffg')

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('f'));

const newString =gameName.substring(0,4);
console.log(newString);


const anotherString = gameName.slice(2,4);
console.log(anotherString);

const newStringOne = "    rtghh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://raja.com/raja%20aaf"

console.log(url.replace('%20', '-'));

console.log(url.includes('rafff'));


