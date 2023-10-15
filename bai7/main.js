document.addEventListener("DOMContentLoaded", function () {
    const buttonContainer = document.getElementById("button_container")
    const totalButton = 64
    let currentButton = 1

    function createButton(number) {
        const button = document.createElement("button")
        button.textContent = number
        button.classList.add("button");

        console.log(button.textContent)

        button.addEventListener("click",function () {
            if (parseInt(button.textContent) === currentButton) {
                button.style.display = "none"
                currentButton++
            } else {
                button.classList.add("wrong")
                alert("Bạn đã nhấn sai thứ tự")
            }
        })
        return button
    }
    for(let i = 1; i <= totalButton; i++) {
        const button = createButton(i)
        buttonContainer.appendChild(button)
    }
})