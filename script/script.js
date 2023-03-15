let modal = document.querySelector("pre")
let button = document.querySelector("button")
let cross = document.querySelector("i")
button.addEventListener("click",()=>{
    modal.classList.add("entering")
})
cross.addEventListener("click",()=>{
    modal.classList.remove("entering")
})