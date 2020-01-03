document.getElementsByTagName("main")[0].remove();
let newHeader = document.createElement("h1");

newHeader.innerHTML = "John is the champion!";
newHeader.setAttribute("id", "victory");
document.body.appendChild = newHeader;
