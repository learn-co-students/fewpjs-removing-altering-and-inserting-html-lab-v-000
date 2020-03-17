let element = document.querySelector('main#main');
element.remove();

let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = "victory";
newHeader.innerHTML = "Azhar is the champion"