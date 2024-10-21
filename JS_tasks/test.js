// Function Declaration 
function add(a, b) {
    return a + b;
  }
  console.log(add(2, 3));

// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(7, 3));

// Arrow Function
const add = (a, b) => a + b;
console.log(add(5, 5));

// Maximum Value
function max_value(arr) {
    return Math.max(...arr);
}
console.log(max_value([23, 324, 523, 543, 345]));


// Regular Function 
function muliply(a, b) {
    return a * b;
}
console.log(muliply(1, 10));

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(3, 3));
