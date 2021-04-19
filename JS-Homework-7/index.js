//task1
let newWindow = window.open("", "", "width=300,height=300");
setTimeout(function () {
  newWindow.resizeTo(500, 500);
}, 2000);

setTimeout(function () {
  newWindow.moveTo(200, 200);
}, 4000);

setTimeout(function () {
  newWindow.close();
}, 6000);

//task2
function changeStyle() {
  let text = document.getElementById("text");
  text.style.color = "orange";
  text.style.fontSize = "20px";
  text.style.fontFamily = "Comic Sans MS";
}

//task3
// first btn
function changeBgColor() {
  document.body.style.backgroundColor = "blue";
}
document.getElementById("btn").onclick = changeBgColor;
// second button
function changeBgColorDbl() {
  document.body.style.backgroundColor = "pink";
}
document.getElementById("btn_2").ondblclick = changeBgColorDbl;

//third button
function pressThirdBtn() {
  document.body.style.backgroundColor = "Brown";
}
document.getElementById("btn_3").addEventListener("mousedown", pressThirdBtn);

function unpressThurdBtn() {
  document.body.style.backgroundColor = "white";
}
document.getElementById("btn_3").addEventListener("mouseup", unpressThurdBtn);

// link
function linkMouseOver() {
  document.body.style.backgroundColor = "yellow";
}
document.querySelector("a").addEventListener("mouseover", linkMouseOver);

function linkMouseOut() {
  document.body.style.backgroundColor = "white";
}
document.querySelector("a").addEventListener("mouseout", linkMouseOut);

//task4
function deleteItem() {
  let elem = document.getElementById("names");
  elem.remove(elem.selectedIndex);
}

//task 5
function onClickBtn() {
  let btn = document.createTextNode("I was pressed ");
  document.body.appendChild(btn);
}
function mouseOverBtn() {
  let btn = document.createTextNode("Mouse on me! ");
  document.body.appendChild(btn);
}
function mouseOutBtn() {
  let btn = document.createTextNode("Mouse in not on me! ");
  document.body.appendChild(btn);
}

//task 6
width.innerHTML = window.innerWidth;
height.innerHTML = window.innerHeight;
window.addEventListener("resize", function() {
  width.innerHTML = window.innerWidth;
  height.innerHTML = window.innerHeight;
});

//task7 Доробити

let city = {
  ger: ["Berlin", "Leipzig", "Hannover", "Köln"],
  usa: ["New-York", "Chicago", "Boston", "Michigan"],
  ukr: ["Lviv", "Kyiv", "Odesa", "Uzhorod"],
};
let country = document.getElementById("country");
let cities = document.getElementById("cities");
window.onload = selectCountry;
country.onchange = selectCountry;

function selectCountry() {
  cities.innerHTML = "";
  let c = this.value || "ger",
    o;
  for (let i = 0; i < city[c].length; i++) {
    o = new Option(city[c][i], i, false, false);
    cities.add(o);
  }
}