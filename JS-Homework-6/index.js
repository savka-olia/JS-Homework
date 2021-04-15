//task1
const elem = document.getElementById("test");
elem.innerHTML = "Last";
// const elem2 = document.getElementsByTagName("div");
// elem2.innerHTML = "Last";

//task2
const image = document.getElementsByClassName("image")[0];
image.src = "cat.jpg";
alert(image.outerHTML);

//task3
let elements = document.querySelectorAll("#text p");

for (let i = 0; i < elements.length; i++) {
  console.log("Selector text " + i + ": " + elements[i].innerHTML);
}

//task4 method1
let ulList = document.querySelectorAll("#list li");
alert(ulList[0].innerHTML);
alert(ulList[4].innerHTML);
alert(ulList[1].innerHTML);
alert(ulList[3].innerHTML);
alert(ulList[2].innerHTML);

//method2

//task5
document.getElementsByTagName("h1")[0].style.backgroundColor = "green";
document.getElementById("myDiv").children[0].style.fontWeight = "bold";
document.getElementById("myDiv").children[1].style.color = "red";
document.getElementById("myDiv").children[2].style.textDecoration = "underline";
document.getElementById("myDiv").children[3].style.fontStyle = "italic";
document.getElementById("myList").style.listStyle = "none";
document.getElementById("myList").style.display = "flex";
document.getElementsByTagName("span")[0].style.display = "none";

//task6
const msg1 = prompt("Enter a first message", "");
const msg2 = prompt("Enter a second message", "");
const inp1 = document.getElementById("input1");
const inp2 = document.getElementById("input2");
// inp1.value = msg1;
// inp2.value = msg2;
inp1.value = msg2;
inp2.value = msg1;

//task 7
const main = document.createElement("main");
main.classList = "mainClass check item";
document.body.prepend(main);

const div = document.createElement("div");
div.id = "myDiv";
main.prepend(div);

const p = document.createElement("p");
p.innerHTML = "First paragraph";
div.prepend(p);
