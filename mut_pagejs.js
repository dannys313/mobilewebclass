console.log("balls")

document.querySelector("#bad").addEventListener('click', (event) => {

    const li = document.createElement("li")
    const goodlist = document.querySelectorAll(".good")

    goodlist.forEach(item => {
        item.remove()
    })

    li.textContent = "Why would you do this... don't press e..."
    document.querySelector("ul").appendChild(li)

});

document.addEventListener('keydown', (event) => {
    
    if (event.key.toLowerCase() === 'e') {
        
        event.preventDefault() //if for whatever reason the e keyy did something, this would prevent it

        document.body.style.backgroundColor = "black"
        document.body.style.color = "red"
        
        const warning = document.querySelector("ul li:last-child")
        if (warning) {
            warning.textContent = "I TOLD YOU NOT TO PRESS E!!!"
            warning.style.fontSize = "2rem"
            warning.style.textTransform = "uppercase"
        }

    }
});

const list = document.querySelector(".interactivelist")
const dialog = document.querySelector("#dialog")
const closedialog = dialog.querySelector("button")

list.addEventListener("click", (event) => {

	if (event.target.classList.contains("good")){
		dialog.showModal()
	}
})

closedialog.addEventListener("click", () => {
	dialog.close()
})