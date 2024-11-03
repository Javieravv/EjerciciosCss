const title = document.getElementById("title");
const itemsMenu = document.getElementsByClassName("item-menu")

Array.from(itemsMenu).forEach( item => {
    item.addEventListener("click", () => {
        const textoP = item.querySelector("p").textContent;
        title.textContent = textoP;
    })
})

title.addEventListener("click", () => {
    alert(title.innerHTML)
})