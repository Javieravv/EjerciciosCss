const radios = document.getElementsByName('radiomateria');
const navmain = document.getElementById('nav-main')
const targetValue = document.getElementById('target-value')

let lastCheckedRadio = null;

for (const element of radios) {
    element.addEventListener("click", (e) => {
        if (lastCheckedRadio === e.target) {
            e.target.checked = false;
            lastCheckedRadio = null
        } else {
            lastCheckedRadio = e.target;
        }
    })
}


navmain.addEventListener("click", (e) => {
    let temp = e.target;
    console.log(e, temp)
})