//Infinity
let number = 1 / 0;
console.log(number);
console.log(typeof number);

//Nan
let word = "hello" / 0;
console.log(word);
console.log(typeof word);

//string + number(with "+") --> returns string
let n1 = 5 + "10";
console.log(n1);
let n2 = "10" + 5;
console.log(n2);
let n3 = "10" + "10";
console.log(n3);
let n4 = 10 + 10;
console.log(n4); 

//string + number(with -, *, /) --> returns number
let m1 = "10" - 5;
console.log(m1);
let m2 = "10" * 5;
console.log(m2);
let m3 = "10" / 5;
console.log(m3);
let m4 = 10 - "5";
console.log(m4);
let m5 = 10 * "5";
console.log(m5);
let m6 = 10 / "5";
console.log(m6);