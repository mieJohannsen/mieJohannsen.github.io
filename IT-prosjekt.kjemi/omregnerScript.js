
let omregnerForm = document.getElementById("omrenerForm");
let masseEl = document.getElementById("masse");
let molarMasseEl = document.getElementById("molarMasse");
let stoffmengdeEl =  document.getElementById("stoffmengde");
let buttonEl =  document.querySelector("button");



buttonEl.addEventListener('click', finnStoffmengde)
function finnStoffmengde(e){

    e.preventDefault()
    let masse = Number(masseEl.value)
    let molarMasse = Number(molarMasseEl.value)
    mol = masse / molarMasse
    stoffmengdeEl.innerHTML =  (`${mol} mol`)

}







