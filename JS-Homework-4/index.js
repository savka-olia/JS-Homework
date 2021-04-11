// // task 1
// function calcRectangleArea(height, width) {
//     if (isNaN(height) || isNaN(width)) {
//       throw "Parameter is not a number!";
//     } else {
//       return height * width;
//     }
//   }

// try {
//   const rectangHeight = parseInt(prompt("Enter the height of rectangle:"));
//   const rectangleWidth = parseInt(prompt("Enter the width of rectangle:"));
//   console.log(calcRectangleArea(rectangHeight, rectangleWidth));
// } catch (e) {
//   console.error(e);
// }

// // task 2
// function checkAge() {
//     let age = Number(prompt("Enter your age: "));
//     if (age === "") {
//       throw new Error("The field is empty! Please enter your age");
//     } else if (isNaN(age) === true) {
//       throw new Error("The value is not a number!");
//     } else if (age < 14) {
//       throw new Error("You are underaged!");
//     } else {
//       alert("Movie is available");
//     }
//   }
//  // try catch
//  try {
//     checkAge();
//   } catch (e) {
//     console.log(e);
//   }

// //  task 3
// class MonthException {
//     constructor(message) {
//       this.name = "MonthException";
//       this.message = message;
//     }
//   }
//   function showMonthName(month) {
//     let monthArr = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];
//     if (month < 1 || month > 12) {
//       throw new MonthException("Incorrect month number");
//     } else {
//       return monthArr[month - 1];
//     }
//   }
//   try {
//     console.log(showMonthName(5));
//     console.log(showMonthName(14));
//   } catch (e) {
//     console.log(e.name + " " + e.message);
//   }

//task 4 (fixed)
function showUser(id) {
  if (id < 0) {
    throw new Error("ID must not be negative: " + id);
  }
  return { id: id };
}

function showUsers(ids) {
  let idArr = [];
  for (let i in ids) {
    try {
      idArr.push(showUser(ids[i]));
    } catch (exception) {
      console.log(exception.message);
    }
  }
  return idArr;
}
showUsers([7, -12, 44, 22]);