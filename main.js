//function declaration
function calculateHyponatize(a,b) { // parametr
    return  Math.sqrt(a*a + b*b);
} // hoisting 

//function expression
const calculate = function asd(a,b) {
    return  "test";
} 

// function arrow function
const calculate2 = (a,b) => {
    return "test2"
}
console.log(calculateHyponatize(3,4))
console.log(calculate(3,4))
console.log(calculate2(3,4)) // argument