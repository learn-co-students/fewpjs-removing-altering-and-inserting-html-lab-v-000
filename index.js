// Write your code here!

document.body.removeChild(document.querySelector('main#main'));

const newHeader = document.body.appendChild(document.createElement('h1'));
newHeader.id = 'victory'
newHeader.innerHTML = 'NAME is the champion'