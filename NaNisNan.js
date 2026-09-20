//1.
console.log(0 / 0);
console.log(typeof NaN);
//2.
console.log(isNaN("hello"));
console.log(isNaN("123"));
console.log(Number.isNaN("hello"));
console.log(Number.isNaN(NaN));
//3.
function chechNumber(value){
    const result = Number.isNaN(value);
    if(result == number){
        return "Valid number";
    }
    return "Inavalid number";
        
}
let resul = checkNumber("hello");
console.log(resul);