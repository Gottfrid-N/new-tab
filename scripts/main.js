let buttonSetUsername = document.querySelector("#button-setUsername");
let buttonSetHeader = document.querySelector("#button-header");
let buttonBoth = document.querySelector("#button-both")

let header = document.querySelector("#header");

function setLocalUsername() {
    const name = prompt("Please enter your name.")
    if (!name) {
        alert("Invalid Name!")
        return
    }
    localStorage.setItem("name", name)
}

function setHeaderToLocalUsername() {
    const name = localStorage.getItem("name")
    if (name) {
        header.textContent = "Hello, " + name;
    }

}

buttonSetUsername.onclick = () => { 
    setLocalUsername();
}

buttonSetHeader.onclick = () => {
    setHeaderToLocalUsername();
}

buttonBoth.onclick = () => {
    setLocalUsername();
    setHeaderToLocalUsername();
}