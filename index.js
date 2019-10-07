// Write your code here!


let main = document.getElementById('main');
main.remove();



let newHeader = document.createElement('h1');
newHeader.id = ("victory");
//you don't need to append - already being added to the DOM with command above
//document.body.appendChild(head);
let myName = "Sushi Chanrai"
newHeader.innerHTML = `${myName} is the champion`
