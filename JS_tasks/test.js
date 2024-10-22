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

//program to determine if a person is eligible to vot
function Eligible(x) {
    if (x >= 18) {
        console.log('Eligible');
    }
    else {
        console.log('Not Eligible');
    }
}

//Check days of week
function days_Of_Week(x) {
    switch(x) {
        case 1:
            console.log('Sunday')
        case 2:
            console.log('Monday')
        case 3:
            console.log('Tuesday')
        case 4:
            console.log('Wednesday')
        case 5:
            console.log('Thursday')
        case 6:
            console.log('Fridady')
        case 7:
            console.log('Saturday')
    }
}

// for loop to log each name
const names = ["Ichraf", "Youssef", "Ziad", "Ahmed", "Ibrahim"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// while count from 1 to 10
let count = 1;
while (count <= 10) {
    console.log(count);
    count++;
}

// Function to find even nums in range
function even_Number(a, z) {
    for (let i = a; i < z; i++) {
        if(i % 2 === 0){
            console.log(i);
        }
    }
}
