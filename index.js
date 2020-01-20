let element = document.getElementById("main");
element.remove();

let newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
document.body.appendChild(newHeader);

newHeader.innerHTML = "Bruce is the champion";
