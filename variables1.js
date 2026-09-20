// declaring a variable
let age;
console.log(age);

//assiging a value to the variable
age = 10;
console.log(age);

//reassiging a value to the variable
let marks = 90;
console.log(marks); // output = 90
marks = 99;         // reassigned the variable
console.log(marks);

//naming a variable - in bad way
let x = "Likhi";
let y = 20;

//naming a variable - in good way
let name = "Likhi";
let id = 20;

//Rules to variables:
// 1. use only letters, _ , $
let car = 2;
let _car = 9;
let $car = 0;
console.log(car);
console.log(_car);
console.log($car);

//2. case senstive
let bus = 6;
let Bus = 3;
console.log(bus);
console.log(Bus);

//3. always use camelCase
let isLogged = true;
console.log(isLogged);

//4.don't use reserved keywords and special characters.
//let const = 12; show error(to see - remove//)
//let #car = 12;  show error(to see - remove//)


//Using const keyword
const maxScore = 100;
console.log(maxScore);
