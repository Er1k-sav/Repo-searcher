window.onload = () => {
    const helpBt = document.querySelector("#help");
    const info = document.querySelector("#info");
    
    helpBt.addEventListener("click", () => {
        info.style.opacity = 1;
    })
}
