// let element = document.createElement('div');
//
// document.body.append(element);
//
// let ul = document.createElement('ul');
//
// for (let i = 0; i < 3; i++) {
//   let li = document.createElement('li')
//   li.innerHTML = (i + 1).toString()
//   ul.appendChild(li)
// }
//
// element.appendChild(ul)
document.querySelector('main#main').remove();

let newHeader = document.createElement('h1');

newHeader.id = 'victory';
newHeader.innerHTML = 'Eddie is the champion!';
