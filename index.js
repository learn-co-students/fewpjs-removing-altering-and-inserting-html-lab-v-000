document.querySelector("main#main").remove()

let h = document.createElement("h1")
h.id = "victory"
document.body.appendChild(h)
let newHeader = document.querySelector("h1#victory")
newHeader.innerHTML = "is the champion"