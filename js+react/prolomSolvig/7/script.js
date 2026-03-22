let container = document.createElement(`div`);
let inputText = document.createElement(`input`);
inputText.type = "text";
inputText.placeholder = `Enter your text`;
let btnAdd = document.createElement(`button`);
btnAdd.classList.add(`add`);
btnAdd.innerText = `Add`;
let mainwaiper = document.createElement(`div`);
let list = document.createElement(`ul`);
list.classList.add(`listcon`);
container.append(inputText, btnAdd, mainwaiper, list);
document.body.appendChild(container);
btnAdd.addEventListener(`click`, () => {
  let inputValue = inputText.value;
  if (inputValue.trim() !== "") {
    let listItem = document.createElement(`li`);
    listItem.classList.add(`list`);
    listItem.innerText = inputValue;
    list.appendChild(listItem);
    inputText.value = "";
    let btnDelete = document.createElement(`button`);
      btnDelete.innerText = "delete";
      btnDelete.classList.add(`delete`)

    btnDelete.addEventListener(`click`, () => {
      listItem.remove();
    });
      let checked = document.createElement(`input`)
      checked.type = `checkbox`;
      checked.addEventListener(`click`,
          () => {
            listItem.classList.add(`item`)

          }
      )
      listItem.appendChild(btnDelete);
      listItem.appendChild(checked)
  } else {
    alert("ererr");
  }
});
