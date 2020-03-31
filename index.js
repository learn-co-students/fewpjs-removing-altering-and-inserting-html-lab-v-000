// Write your code here!
let main = document.querySelector("main#main");
//We're setting the variable main to the html element <main> with an id of main
main.remove();
//We're removing it directly.comment
let newHeader = document.createElement('h1');
newHeader.id = "victory";
//you need to set the id manually.
//the createElement() method only takes a tag name, like 'h1', as its first argument - Ian

newHeader.innerHTML = 'YOUR-NAME is the champion';
//This is to set the html

//node inspect index.js is pry for javascript
//To get an element to appear in the DOM, we have to append it to an existing DOM node
document.body.appendChild(newHeader);
