let el = document.querySelector("main");
el.remove();

let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = "victory"
newHeader.innerHTML = "Reggie is the champion"
