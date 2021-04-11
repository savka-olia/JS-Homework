//task 1
let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = !!(x + y);
console.log(res3); 
console.log(typeof res3); 

let res4 = NaN + (x / y);
console.log(res4);
console.log(typeof res4); 


// task 2
const number = prompt("Enter a number: ");
if (number >= 0) {
    if (number % 2 == 0) {
        console.log("The number is even positive");
    } else {
		console.log("The number is positive and odd")
	}
} else {
    console.log("The number is negative");
} 	

// кратне 7
const userNum = Number(prompt("Enther a number: ")); 
if ((userNum % 7) === 0 ){
    console.log("Число є кратним 7");
} else {
    console.log("Число не є кратним 7");
}

// task 3
let someArr = [27, "Apple", false, null];
alert(someArr.length);
someArr.push(prompt("Enter a value"));
alert(someArr[4]);
someArr.splice(0, 1);

//task 4
let cities = ["Rome", "Lviv", "Warsaw"]; 
cities.forEach(function(elem) {
	document.write(elem + "*");
});

//task 5
let isAdult = prompt("Are you the legal age?");
if (isAdult >= 18) {
	alert("You are adult");
} else {
	alert("You are underaged");
}

//task 6 (Updated: validation was added)
let sideA = Number(prompt("Enter the lenght of the A side of the triangle"));
let sideB = Number(prompt("Enter the lenght of the B side of the triangle"));
let sideC = Number(prompt("Enter the lenght of the C side of the triangle"));
let arr = [sideA, sideB, sideC];
if (sideA > 0 && sideB > 0 && sideC > 0) {
  let perimeterValue = (sideA + sideB + sideC) / 2;
  let areaValue = Math.sqrt(
    perimeterValue *
      (perimeterValue - sideA) *
      (perimeterValue - sideB) *
      (perimeterValue - sideC)
  );
  console.log("The area of the triangle is " + areaValue.toFixed(3));
} else {
  alert("Incorrect data!");
}
arr = arr.sort((a, b) => a - b);
if (
  Math.pow(arr[0], 2) === Math.pow(arr[1], 2) + Math.pow(arr[2], 2) ||
  Math.pow(arr[1], 2) === Math.pow(arr[2], 2) + Math.pow(arr[0], 2) ||
  Math.pow(arr[2], 2) === Math.pow(arr[1], 2) + Math.pow(arr[0], 2)
) {
  console.log("Трикутник прямокутний");
} else {
  console.log("Трикутник не прямокутний");
}
// //task 7
let time = new Date();
let currentDate = time.getHours();
// console.log(currentDate);
if (currentDate >= 5 && currentDate <= 11) {
	alert('Good morning');
  } else if (currentDate > 11 && currentDate <= 17) {
	alert('Good afternoon');
  } else if (currentDate > 17 && currentDate <= 23) {
	alert('Good evening');
  } else {
	alert('Good night');
  }
  // using ternary 
let message = currentDate >= 5 && currentDate <= 11 ? alert('Good morning') 
	: currentDate > 11 && currentDate <= 17 ? alert('Good afternoon') 
	: currentDate > 17 && currentDate <= 23 ? alert('Good evening')
	: alert('Good night');
