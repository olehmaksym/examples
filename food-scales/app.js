window.onload = displayProducts;

const addPrBtn = document.querySelector('#add-pr');
const productWeight = document.querySelector('#product-weight');
const pricePerKg = document.querySelector('#price-per-kg');
const totalPrice = document.querySelector('#total-price');

let prWeight = 0;

addPrBtn.addEventListener('click', setWeight);

const products = [
  'apple',
  'apricot',
  'avocado',
  'banana',
  'blackberry',
  'blackcurrant',
  'blueberry',
  'boysenberry',
  'cherry',
  'coconut',
  'fig',
  'grape',
  'grapefruit',
  'kiwifruit',
  'lemon',
  'lime',
  'lychee',
  'mandarin',
  'mango',
  'melon',
  'nectarine',
  'orange',
  'papaya',
  'passion fruit',
  'peach',
  'pear',
  'pineapple',
  'plum',
  'pomegranate',
  'quince',
  'raspberry',
  'strawberry',
  'watermelon',
];

function setWeight() {
  prWeight = getRandomFloat(1, 10);
  productWeight.innerHTML = prWeight;
}

function calcPrice(product) {
  if (!prWeight) {
    alert('Зважте товар')
  } else {
    pricePerKg.innerHTML = product.dataset.price;
    totalPrice.innerHTML = floor10(product.dataset.price * prWeight);
  }
}

function floor10(num) {
  let wp = Math.trunc(num);
  let fp = num % 1;

  return wp + Math.round(fp * 100)/100;
}

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function getRandomFloat(min, max) {
  return Math.floor(Math.random() * (max - min)) + min + Math.floor(Math.random() * 100)/100;
}

// Display all products on the screen
function displayProducts() {
  const ITEMS = products.map(name => new Product(name, getRandomFloat(7, 50)));
  const items = ITEMS
    .map(({ name, price }) => `<div class="product" data-price="${price}" data-name="${name}">
      <h2>${name}</h2>
      <p>${price} ₴/кг</p>
    </div>`)
    .join('');

  // insert new dom elements into #products element
  document.querySelector('#products').innerHTML = items;
  // add event listener for each product
  document.querySelectorAll('.product').forEach(pr => pr.addEventListener('click', () => calcPrice(pr)))
}