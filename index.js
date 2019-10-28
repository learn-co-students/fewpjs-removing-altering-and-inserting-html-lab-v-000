document.getElementById("main").remove();

let newHeader = document.createElement("h1");

newHeader.setAttribute("id", "victory");

let paragraph = document.createElement("p");
let text = document.createTextNode("Meg is the champion!");
paragraph.appendChild(text);

newHeader.appendChild(paragraph);