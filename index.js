document.querySelector("main").remove()
let h1Victory = document.createElement('h1')
h1Victory.id = "victory"
let newHeader = document.body.appendChild(h1Victory)
newHeader.textContent = "YOUR-NAME is the champion"
