let listElements = document.querySelectorAll('.list_button--click');
// console.log(listElements);

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {
        // alert();
        // le agregamos y quitamos la clase arrow, cada vez que demos click
        listElement.classList.toggle('arrow'); 

        let height = 0;
        // tomamos el hermano adyacente
        let menu = listElement.nextElementSibling;
        console.log(menu.scrollHeight);

        if (menu.clientHeight == "0") {
            height = menu.scrollHeight;
        }

        // menu.style.height = height + "px";
        menu.style.height = `${height}px`;
    })
})

