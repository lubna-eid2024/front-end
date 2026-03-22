let container = document.createElement(`div`)
let btn = document.createElement(`button`)
btn.classList.add(`btn`)
btn.innerText=`Add`
let pag = document.createElement(`p`)
pag.innerText=`hello world`
container.append(btn, pag)

btn.addEventListener(`click`, () => {

 
    if (pag.style.display==="none") {
        pag.style.display = "block";
        pag.classList.add(`pag`);
        btn.innerText=`hide`
    } else {
        pag.style.display = "none";
            btn.innerText=`show`;
    }
})
document.body.appendChild(container);