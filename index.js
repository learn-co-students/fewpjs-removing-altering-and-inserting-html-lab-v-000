// Write your code here!

let main = document.querySelector('main#main');

main.remove();

let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

newHeader.id = "victory";
newHeader = document.querySelector('h1#victory');
newHeader.innerHTML = "YOUR-NAME is the champion";

