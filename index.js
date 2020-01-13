// Write your code here!
let doc = document;
doc.querySelector("body").remove("main");
let newHeader = doc.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "YOUR-NAME is the champion";