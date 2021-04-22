//task1
function checkIfUppercase(str) {
  let uppercase = /^[A-Z]/;
  if (uppercase.test(str)) {
    console.log("String starts with uppercase character");
  } else {
    console.log("String is not start with uppercase character");
  }
}
checkIfUppercase("regexp");
checkIfUppercase("RegExp");

//task2
function checkEmail(email) {
  let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
}
console.log(checkEmail("Qmail2@gmail.com"));

//task3
let string = "cdbBdbsbz";
let res = string.match(/d(b+)(d)/i);
console.log(res);

//task4
let re = /(\w+)\s(\w+)/;
let str = "Java Script";
let newstr = str.replace(re, "$2, $1");
console.log(newstr);

//task5
function checkIfValid(num) {
  let regExp = /\d{4}(\s|\-)\d{4}(\s|\-)\d{4}(\s|\-)\d{4}/;
  let res = regExp.test(num);
  if (res) {
    console.log("Card is valid:)");
  } else {
    console.log("Cars is invalid");
  }
}
checkIfValid("9999-9999-9999-9999");
checkIfValid("9999-99f9-9999-9999");

//task6
function checkEmail(str) {
  if (/^[a-zA-Z0-9]+[\w]*-?[\w]*@[a-z]+\.[a-z]{2,4}$/.test(str)) {
    console.log("Email is correct!");
  } else {
    console.log("Email is not correct!");
  }
}
checkEmail("my_mail@gmail.com");
checkEmail("#my_mail@gmail.com");

//task7
function checkLogin(str) {
  let regExp = /^[a-zA-Z][a-zA-Z0-9-_\.]{2,10}$/;
  console.log(regExp.test(str));
  let regExpNum = /\d*[.]?\d+/g;
  console.log(str.match(regExpNum));
}
checkLogin("ee1.1ret3");
checkLogin("ee1*1ret3");