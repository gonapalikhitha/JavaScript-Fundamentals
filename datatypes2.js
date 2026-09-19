//1. Number datatype
let age = 20;
let marks = 99.9;
console.log(age);
console.log(marks);

//2. String datatype
let name = "Likhitha";
console.log(name);
console.log("She is a good girl");
console.log('Work Hard');

//3. Boolean datatype
let isGood = true;
console.log(isGood);

//4. Undefined datatype
let location;
console.log(location);

//5. Numm datatype
let id = null;
console.log(id);

//6.Object datatype
let person = {
    name : "Likhitha",
    age  : 20
}
console.log(person.name);
console.log(person.age);

//7. Symbol datatype
let a = Symbol("id");
let b = Symbol("id");

console.log(a === b);

//8. BigInt datatype
let bigNum = 1234567890987654321n;
console.log(bigNum);