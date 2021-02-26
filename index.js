// Write your code here!
let removeElement = document.querySelector('#main');
removeElement.remove();

let element = document.createElement('h1');
document.body.appendChild(element);
element.id = "victory";
element.innerHTML = "Arturo is the champion";

let newHeader = document.querySelector("h1#victory");