"use strict";

//document.getElementById("count").innerText = 2 + 6 +3-17+23
//let firstbatch = 5
// let secondbatch = 7
// let count = firstbatch + secondbatch
// console.log(count)
//let myage = 23
//console.log(myage)
// let myage = 23
// let humandogratio= 7
// let mydogage = myage * humandogratio
// console.log(mydogage)
//let Bonuspoints= 50
//console.log(Bonuspoints)
//Bonuspoints= Bonuspoints * 2
//console.log(Bonuspoints)
//Bonuspoints = 70
//console.log(Bonuspoints)
//Bonuspoints=Bonuspoints-45
//console.log(Bonuspoints)
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
//function increment() {
//  console.log("the button was clicked")
//}
//function coutdown() {
// console.log("5");
// console.log("4");
//console.log("3");
//console.log("2");
//console.log("1");
//}
//firstaet
//coutdown();
//secondat
//coutdown();
//function Rulez(){
// console.log("thisrulez42");
//}
//Rulez()
//let lap1 = 32
//let lap2 = 35
//let lap3 = 30
//function loglapT(){
// console.log(lap1+lap2+lap3)
//}
//loglapT();
//let lapscompleted = 0
//function incrementlap() {
//lapscompleted = lapscompleted + 1
//}
//incrementlap()
//incrementlap()
//incrementlap()
var saveEl = document.getElementById("save-el");
var countEl = document.getElementById("count-el");
var count = 0;
console.log(saveEl);

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  var countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}