btnAdd.addEventListener(`click`, () => {
  const tasksContainer = document.getElementById("tasksContainer");
  let taskDiv = document.createElement(`div`);
  let pag = document.createElement("p");
  taskDiv.appendChild(pag);
  pag.textContent = text.value;
  text.value = "";
  taskDiv.classList.add(`taskDiv`);
  let checkbox = document.createElement(`input`);
  checkbox.classList.add(`checkbox`);
  let delleteBtn = document.createElement(`button`);
  delleteBtn.classList.add(`delleteBtn`);
  delleteBtn.innerHTML = `<button type="button" class="btn">Dellete</button>`;
  checkbox.type = `checkbox`;

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(delleteBtn);
  tasksContainer.appendChild(taskDiv);

  tasksContainer.classList.add(`tasksContainer`);

  delleteBtn.addEventListener(`click`, () => {
    let sure = confirm(`Are you sure for deleting element ?`);
    if (sure) {
      taskDiv.remove();
    }
  });
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      taskDiv.style = `text-decoration: line-through;`;
    } else {
      taskDiv.style = `text-decoration: none;`;
    }
  });
});
// btnAdd.classList.add(`btnAdd`);
