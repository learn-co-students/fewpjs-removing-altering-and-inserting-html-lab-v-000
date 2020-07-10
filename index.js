document.querySelector('main').remove()

let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = "victory";

newHeader.innerHTML = "Jamilya is the champion";

done();
