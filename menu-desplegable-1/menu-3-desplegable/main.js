const dropDownList = document.getElementsByClassName("dropdown__list")

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        const x = e.target.closest('.dropdown__list')
        if (!x) {
            for (const itemDrop of dropDownList) {
                console.log('Caramba')
                itemDrop.style.removeProperty('--rowMenu');
                // itemDrop.style.setProperty('--rowMenu', "0fr");
                // itemDrop.style.removeProperty('--rowMenu');
            }
        }
    })
})