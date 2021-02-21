// Write your code here!
let ul = document.getElementById('main');
ul.remove();
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
document.body.appendChild(newHeader);
newHeader.innerHTML = 'YOUR-NAME is the champion';
