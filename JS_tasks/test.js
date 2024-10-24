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

//functoin to log eachh element in the array
function elements(arr) {
    for(let i = 0; i < arr.length; i++)
        console.log(arr[i]);
}

// function to add elemnets to array
function add(x, arr) {
    arr.push(x);
    return arr;
}

// function to remove elements from array
function remove(x, arr) {
    arr.pop(x);
    return arr;
}

// for each method
function elements2(arr) {
    arr.forEach(elm => {
        console.log(elm);
    });
}

// even numbers
let array = [1,2,3,4,5,6,7,8,9,10];
function even_Num(array) {
    array.forEach(elm => {
        if(elm % 2 === 0){
            console.log(elm);
        }
    });
}
// sort array
let array2 = []
function sort(array2){
    array2.sort((a, b) => a - b);
    console.log(array2)
}

//objects//
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    describtion() {
        return `${this.title} by ${this.author}, published in ${this.yearPublished}.`;
    }
};
function logBook(book) {
    for (let key in book) {
        console.log(`${key}: ${book[key]}`);
    }
}
let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960 },
    { title: "1984", author: "George Orwell", yearPublished: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813 },
    { title: "Moby Dick", author: "Herman Melville", yearPublished: 1851 }
];
//find book
function findBook(title, books) {
    for(let book of books){
        if(book.title === title){
            return book;
        }
    }
}
// students
function getListStudents() {
    return [
        { id: 1, firstName: "Ziad", location: "San Francisco" },
        { id: 2, firstName: "James", location: "Columbia" },
        { id: 5, firstName: "Serena", location: "San Francisco" }
    ];
}
//student id
function getListStudentIds(students) {
    if (!Array.isArray(students)) {
        return [];
    }
    return students.map(student => student.id);
}
//student location
function getStudentsByLocation(students, city) {
    return students.filter(student => student.location === city);
}
//getStudentIdsSum
function getStudentIdsSum(students) {
    return students.reduce((sum, student) => sum + student.id, 0);
}

