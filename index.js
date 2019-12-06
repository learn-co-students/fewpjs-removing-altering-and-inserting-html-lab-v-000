// Write your code here!

// newHeader is not defined
let newHeader = document.createElement('h1');
// has a 'newHeader' variable that points to node 'h1#victory'
newHeader.id = "victory";
// has a 'newHeader' variable that points to node 'h1#victory' with
// "YOUR-NAME is the champion" inside
/*
from indexTest.js:
expect(newHeader.innerHTML, "Make sure you create an <h1> with id 'victory' with a sweet message in it").to.include("is the champion");
i.e. -> ".to.include"
*/
document.body.appendChild(newHeader);
newHeader.innerHTML = "AnythingYouCouldPossiblyWantToBe is the champion!"
// no longer has DOM node 'main#main'
document.querySelector('#main').remove();
