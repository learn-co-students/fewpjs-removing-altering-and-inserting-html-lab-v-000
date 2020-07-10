// let element = document.createElement("div");

// document.body.appendChild(element);

// let ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//   let li = document.createElement("li");
//   li.innerHTML = (i + 1).toString();
//   ul.appendChild(li);
// }

// element.appendChild(ul);

// let element = document.querySelector("p#greeting");
// element.innerHTML = "Hello, DOM!";

// element.style.backgroundColor = "#27647B";
// element.style.textAlign = 'center';
// ul.style.textAlign = 'left

// let main = document.querySelector("#main");
main.remove(document.querySelector("#main"));

var newHeader = document.createElement("h1");

var newContent = document.createTextNode("victory");
newHeader.setAttribute("id", "victory");
newHeader.appendChild(newContent);
newHeader.innerHTML = "Shaun is the champion";
document.body.appendChild(newHeader);
