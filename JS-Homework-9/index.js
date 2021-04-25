//task1
let arr = ["Tom", "Sam", "Ray", "Bob"];
const [firstName, secondName, ,...rest] = arr;
console.log(firstName); 
console.log(secondName);  
console.log(rest);

//task2
let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
const {names:[, name2, , name4], ages: [, age2, , age4]} = data;
console.log(name2); 
console.log(age2); 
console.log(name4); 
console.log(age4);

//task3
function mul() {
  let a = 0;
  for (let i = 0, length = arguments.length; i < length; i++) {
    if (typeof arguments[i] === "number") {
      if (a === 0) a = 1
      a *= arguments[i];
    } 
  }
 return console.log(a);
}

mul(1, "str", 2, 3, true); 
mul(null, "str", false, true); 

//task4
let server = {
  data: 0,
  convertToString: function (callback) {
     callback( () => this.data + "" );
  }
};

let client = {
  server: server,
  result: "",
  calc: function (data) {
     this.server.data = data;
     this.server.convertToString(this.notification());
  },
  notification: function () {
     return ((callback) => {
        this.result = callback();
     });
  }
};
client.calc(123);
console.log(client.result); 
console.log(typeof client.result); 

//task 5
mapBuilder = (keysArray, valuesArray) => {
  const map = new Map();

  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArray[i]);
  }
  return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size);
console.log(map.get(2));