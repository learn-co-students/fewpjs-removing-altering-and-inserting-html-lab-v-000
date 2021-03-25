// Write your code here!
//
//
const mainElement = document.querySelector("main");

mainElement.remove();

let newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");

newHeader.innerHTML = "Bryan is the champion!";

place = document.querySelector("body");

place.appendChild(newHeader);
