// Write your code here!
// body.removeChild(document.querySelector("main#main"))

var el = document.getElementById('main');
el.remove()

var newHeader = document.createElement('h1')
newHeader.id = 'victory'

document.head.appendChild(newHeader)

let header = document.querySelector("h1#victory");
header.innerHTML = "Michael is the champion"


// let newHeader = document.getElementById('h1').id = 'victory'
//
