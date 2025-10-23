const products = [
  {
    title: "Headphones",
    description: "This is a description",
    price: 23,
  },
  {
    title: "Keyboard",
    description: "This is a description",
    price: 50,
  },
  {
    title: "Iphone",
    description: "This is a description",
    price: 1000,
  },
  {
    title: "Iphone",
    description: "This is a description",
    price: 1000,
  },
  {
    title: "Iphone",
    description: "This is a description",
    price: 1000,
  },
];

let search = document.getElementById(`search`); //input
let searchItem = document.getElementById(`search-item`); //btn serch
let box = document.getElementById(`box`);
let tems = document.getElementById(`tems`);
function displayProduct(items) {
  let container = ``;
  items.map((products) => {
    container += `
        <div class="col-md-4">
             
 <div class="card my-5" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${products.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${products.description}</h6>
    <p class="card-text">${products.price}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</div>`;
    box.innerHTML = container;
  });
}
displayProduct(products);
tems.addEventListener(`click`, function () {
  let filter = products.filter((products) => products.price > 500);
  displayProduct(filter);
});
searchItem.addEventListener(`click`, () => {
  let input = search.value.trim().toLowerCase();
  let btn = products.filter(
    (products) => products.title.toLowerCase() === input
  );
  displayProduct(btn);
});
