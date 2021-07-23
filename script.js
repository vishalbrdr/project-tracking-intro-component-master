document.getElementById("menu-btn-container").addEventListener("click", ()=>{
    document.querySelector(".open").classList.toggle("active")
    document.querySelector(".close").classList.toggle("active")
    document.querySelector("nav").classList.toggle("active")
    document.querySelector(".nav-links").classList.toggle("menu")
})