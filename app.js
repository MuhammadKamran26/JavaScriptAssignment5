// 1. Declare an empty array using JS literal notation
let studentNames = [];

// 2. Declare an empty array using JS object notation
let studentNamesObject = new Array();

// 3. Declare and initialize a strings array
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// 4. Declare and initialize a numbers array
let numbers = [10, 20, 30, 40, 50];

// 5. Declare and initialize a boolean array
let booleanArray = [true, false, true, false];

// 6. Declare and initialize a mixed array
let mixedArray = ["Hello", 25, true, null, { name: "John" }];

// 7. Declare and initialize an array for education qualifications in Pakistan
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("<h3>Education Qualifications in Pakistan:</h3>");
document.write("<ul>");
for (let i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");

// 8. Store student names and scores, then display percentages
let students = ["Ali", "Ahmed", "Sara"];
let scores = [450, 390, 420];
let totalMarks = 500;

for (let i = 0; i < students.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    document.write(`${students[i]} scored ${scores[i]} out of ${totalMarks} (${percentage.toFixed(2)}%) <br>`);
}

// 9. Colors Array Manipulation
let colors = ["Red", "Green", "Blue"];
document.write("<br>Original Colors: " + colors.join(", ") + "<br>");

// a. Add color at beginning
let firstColor = prompt("Enter a color to add at the beginning:");
colors.unshift(firstColor);
document.write("Updated Colors: " + colors.join(", ") + "<br>");

// b. Add color at end
let lastColor = prompt("Enter a color to add at the end:");
colors.push(lastColor);
document.write("Updated Colors: " + colors.join(", ") + "<br>");

// c. Add two colors at the beginning
colors.unshift("Yellow", "Pink");
document.write("Updated Colors: " + colors.join(", ") + "<br>");

// d. Delete the first color
colors.shift();
document.write("After Removing First Color: " + colors.join(", ") + "<br>");

// e. Delete the last color
colors.pop();
document.write("After Removing Last Color: " + colors.join(", ") + "<br>");

// f. Add color at specific index
let indexToAdd = prompt("Enter index to add a color:");
let colorToAdd = prompt("Enter the color name:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("Updated Colors: " + colors.join(", ") + "<br>");

// g. Delete colors from a specific index
let indexToDelete = prompt("Enter index to delete color(s):");
let numberToDelete = prompt("How many colors to delete?");
colors.splice(indexToDelete, numberToDelete);
document.write("Updated Colors: " + colors.join(", ") + "<br>");

// 10. Sort student scores in ascending order
let studentScores = [320, 230, 480, 120];
studentScores.sort((a, b) => a - b);
document.write("<br>Sorted Scores: " + studentScores.join(", ") + "<br>");

// 11. Copy cities to selectedCities array
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(1, 4);
document.write("<br>Selected Cities: " + selectedCities.join(", ") + "<br>");

// 12. Convert array to a single string
let arr = ["This", "is", "my", "cat"];
let joinedString = arr.join(" ");
document.write("<br>String Output: " + joinedString + "<br>");

// 13. FIFO (First In First Out)
let fifoQueue = [];
fifoQueue.push("First");
fifoQueue.push("Second");
fifoQueue.push("Third");
document.write("<br>FIFO Output: " + fifoQueue.shift() + "<br>");
document.write(fifoQueue.shift() + "<br>");
document.write(fifoQueue.shift() + "<br>");

// 14. LIFO (Last In First Out)
let lifoStack = [];
lifoStack.push("First");
lifoStack.push("Second");
lifoStack.push("Third");
document.write("<br>LIFO Output: " + lifoStack.pop() + "<br>");
document.write(lifoStack.pop() + "<br>");
document.write(lifoStack.pop() + "<br>");

// 15. Phone Manufacturers Dropdown
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<br><h3>Phone Manufacturers</h3>");
document.write('<select>');
for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write(`<option value="${phoneManufacturers[i]}">${phoneManufacturers[i]}</option>`);
}
document.write('</select>');
