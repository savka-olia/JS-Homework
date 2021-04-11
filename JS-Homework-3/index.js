// task 1
let res = 1;
let arr = [2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  res = res * arr[i];
}
console.log(res);
// using while
let result = 1;
let k = 0;
while (k < arr.length) {
  result = result * arr[k];
  k++;
}
console.log(result);
// task 2
function checkNum() {
  for (let i = 0; i <= 16; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
}
checkNum();

//task 3
function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr[i] = Math.floor(Math.random() * 500) + 1;
  }
  console.log(arr);
}
randArray(5);

//task 4
function raiseToDegree(a, b) {
  alert(Math.floor(Number(a) ** Number(b)));
}
console.log(raiseToDegree(3, 4));

//task 5
function findMin() {
  let i = 0;
  let arr = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    if (arr > arguments[i]) {
      arr = arguments[i];
    }
  }
  return arr;
}
console.log(findMin(12, 14, 4, -4, 0.2));

// task 6
function findUnique(arr) {
  let a = arr.length;
  for (let i = 0; i < a - 1; i++) {
    for (let j = i + 1; j < a; j++) {
      if (arr[i] === arr[j]) return false;
    }
  }
  return true;
}
console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));

// task 7
function lastElem(array, num = 1) {
  let someArr = [];
  for (let i = 0; i < num; i++) {
    someArr[i] = array[array.length - num + i];
  }
  return someArr;
}
console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));

// task 8
function convertUppercase(str) {
  let arr = str.split(' ');
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newarr.join(' ');
}
console.log(convertUppercase("i love java script"));
