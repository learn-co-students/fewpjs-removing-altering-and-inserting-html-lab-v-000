// Write your code here!

//finds the element by id
const element = document.getElementById("main");  
// deletes the element
element.remove();

//has a 'newHeader' variable that points to node 'h1#victory'
let newHeader = document.createElement("h1");
 newHeader.setAttribute("id","victory");

// has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
newHeader.innerHTML = "YOUR - NAME is the champion";